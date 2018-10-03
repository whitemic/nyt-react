import React from "react";

export const ListItem = ({headline, date, url, saveArticle}) => (
  <li className="list-group-item">
    <h1>{headline}</h1>
    <p> {date} </p>
    <a href={url}><button type="button" className="btn btn-info">Link to Article</button></a>
    <a onClick={() => saveArticle(headline, date, url)}><button type="button" className="btn btn-info ml-3">Add to Saved Articles</button></a>
  </li>
);

