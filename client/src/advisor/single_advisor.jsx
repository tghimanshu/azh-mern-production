import { useEffect, useState } from "react";
import http from "../utils/http";

const SingleAdvisor = ({ match }) => {
  const [advisor, setadvisor] = useState({});
  useEffect(() => {
    const getAdvisor = async () => {
      const result = await http.get(
        "/advisor/username/" + match.params.username
      );
      setadvisor(result.data);
    };
    getAdvisor();
  }, [match]);
  return (
    <div>
      <h1>{advisor.name}</h1>
    </div>
  );
};

export default SingleAdvisor;
