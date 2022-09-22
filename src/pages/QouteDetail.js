import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

function QouteDetail() {
  const params = useParams();
  return (
    <>
      <h1>QouteDetail</h1>
      <p>{params.qouteId}</p>
      <Route path="/qoutes/:qouteId/comments">
        <Comments />
      </Route>
    </>
  );
}

export default QouteDetail;
