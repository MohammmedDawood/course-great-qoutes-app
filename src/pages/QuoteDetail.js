import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

function QuoteDetail() {
  const params = useParams();
  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
