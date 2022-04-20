import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  let [categories, setCategories] = useState("");

  // const handleAdd = () => {
  //   const element = "Attack On Titan";
  //   setCategories([...categories, element]);
  // };

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <GifGrid category={categories} />
    </div>
  );
};

export default GifExpertApp;
