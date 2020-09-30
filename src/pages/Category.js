import React from "react";
import { useParams } from "react-router-dom";

const Category = (props) => {
  const { slug } = useParams();
  console.log(typeof slug);
  if (slug) {
    return <div>{slug}</div>;
  }
  return <div>Home</div>;
};

export default Category;
