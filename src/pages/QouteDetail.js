import React from "react";
import { useParams } from "react-router-dom";

function QouteDetail() {
  const params = useParams();
  return (
    <section>
      <h1>QouteDetail</h1>
      <p>{params.qouteId}</p>
    </section>
  );
}

export default QouteDetail;
