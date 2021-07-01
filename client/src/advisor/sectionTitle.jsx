import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sectionTitle.css";

const SectionTitle = (props) => {
  const capitalize = (input) => {
    try {
      var words = input.split("-");
      var CapitalizedWords = [];
      words.forEach((element) => {
        CapitalizedWords.push(
          element[0].toUpperCase() + element.slice(1, element.length)
        );
      });
      return CapitalizedWords.join(" ");
    } catch (error) {
      return input;
    }
  };

  return (
    <div className="p-title">
      <section className="py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <Breadcrumb>
            {props.breadcrumbs.map((breadcrumb, i) => (
              <Breadcrumb.Item
                key={i}
                active={breadcrumb.active}
                as={i === 0 ? "h1" : "h4"}
              >
                <Link to={breadcrumb.link}>{capitalize(breadcrumb.name)}</Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </section>
    </div>
  );
};

export default SectionTitle;
