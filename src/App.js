import React from "react";
import "./styles.css";
import Image from "./components/Image";
import HoverImage from "./components/HoverImage";

export default function App() {
  return (
    <div className="App">
      <HoverImage>
        <Image src="http://picsum.photos/200/300"></Image>
      </HoverImage>
    </div>
  );
}
