// import SectionTitle from "advisor/sectionTitle";
import parse from "html-react-parser";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import XMLParser from "react-xml-parser";

export const Singlexml = ({ match }) => {
  const [xml, setXml] = useState(null);
  useEffect(() => {
    const getNewsXML = async () => {
      try {
        const res = await axios.get(
          "https://www.freepressjournal.in/stories.rss?section-id=9759&format=jio-news",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        const data = new XMLParser().parseFromString(res.data);

        const mydata = data.getElementsByTagName("item").map((item) => {
          const title = item.getElementsByTagName("title")[0].value;
          const link = item.getElementsByTagName("link")[0].value;
          const image = item.getElementsByTagName("image")[0].value;
          const guid = item.getElementsByTagName("guid")[0].value;
          const category = item.getElementsByTagName("category")[0].value;
          const author = item.getElementsByTagName("atom:name")[0].value;
          return {
            title: title,
            link: link,
            image: image,
            guid: guid,
            category: category,
            author: author,
          };
        });
        setXml(mydata.filter((i) => i.guid === match.params.guid)[0]);
      } catch (error) {}
    };
    getNewsXML();
  }, [match]);

  console.log(xml);

  return (
    <Fragment>
      {xml && (
        <Fragment>
          {/* <SectionTitle
            title="one Single xml"
            breadcrumbs={[
              { link: "/", name: "Home" },
              {
                link: `/news/${match.params.guid}`,
                name: xml.guid,
                active: true,
              },
            ]}
          /> */}
          <div className="container px-md-5 mb-4">
            <img
              src={xml.image}
              alt=""
              className="img-responsive img-thumbnail mb-4"
            />
            {parse(xml.title)}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
