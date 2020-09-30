import React from "react";
import { useParams } from "react-router-dom";

const Category = (props) => {
  const { slug } = useParams();

  return <div>{slug}</div>;
};

export default Category;
