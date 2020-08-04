import React, { Fragment, useState, useEffect } from "react";

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

function App() {
  // useState
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  // category changes
  useEffect(() => {
    const checkApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${"mx"}&category=${category}&apiKey=ada93361b65049f88bbd88fa963afb13`;
      const result = await fetch(url);
      const data = await result.json();

      if (data.status !== "ok") return;

      setNews(data.articles);
    };
    checkApi();
  }, [category]);

  return (
    <Fragment>
      <Header title="México Now" />
      <div className="container white">
        <Form setCategory={setCategory} />
        <NewsList news={news}></NewsList>
      </div>
    </Fragment>
  );
}

export default App;
