import React from "react";
import "./styles.css";

import Image from "./components/Image";
//import HoverImage from "./components/HoverImage";
import WithHoverOpacity from "./components/WithHoverOpacity";

const OpacityHover = WithHoverOpacity(Image, 0.5);

export default function App() {
  return (
    <div className="App">
      <OpacityHover src="http://picsum.photos/200/300"></OpacityHover>
    </div>
  );
}
