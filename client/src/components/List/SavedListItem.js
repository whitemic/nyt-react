import React from "react";

export const SavedListItem = ({headline, date, url, id, deleteArticle}) => (
  <li className="list-group-item">
    <h1>{headline}</h1>
    <p> {date} </p>
    <a href={url}><button type="button" className="btn btn-info">Link to Article</button></a>
    <a onClick={() => deleteArticle(id)}><button type="button" className="btn btn-info ml-3">Delete From Saved Articles</button></a>
  </li>
);