import React from "react";
import { useParams } from "react-router-dom";

function QouteDetail() {
  const params = useParams();
  return (
    <>
      <h1>QouteDetail</h1>
      <p>{params.qouteId}</p>
    </>
  );
}

export default QouteDetail;
