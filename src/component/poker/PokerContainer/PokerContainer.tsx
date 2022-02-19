import axios from "axios";
import React, { useEffect } from "react";

export default function PokerContainer() {
  const fetchJira = async () => {
    // console.log(process.env);
    const apiTest = await axios.get("/jira/rest/api/2/issue/ESBR-994", {
      headers: {
        Authorization:
          "Basic bXl1bmdoby5sZWVAYnJpcXVlLmNvLmtyOnFxNkc2MUpLMDVGVjRkT25PYnIxN0ZCMw==",
      },
    });
    console.log(apiTest);
  };
  useEffect(() => {
    fetchJira();
  }, []);
  return <div>PokerContainer</div>;
}
