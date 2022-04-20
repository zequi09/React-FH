import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category, i }) => {
  const { data, loading } = useFetchGifs();

  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const url = `https://api.giphy.com/v1/gifs/search?api_key=96UkInKK80647FlFVVWMjiDKbBsreezX&q=${encodeURI(
  //         category
  //       )}`;

  //       const resp = await fetch(url);
  //       const { data } = await resp.json();
  //       console.log(data);
  //       const gifs = data.map((img) => {
  //         return {
  //           id: img.id,
  //           title: img.title,
  //           url: img.images?.downsized_small.mp4,
  //         };
  //       });
  //       setImages(gifs);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <h3>{category}</h3>

      {loading ? "Cargando..." : "Data cargada"}
      {/* {images.map((images) => {
        return (
          <>
          <img src={images.url} alt={images.title} />
          </>
          );
        })} */}
    </div>
  );
};

export default GifGrid;
