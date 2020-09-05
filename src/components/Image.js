import React from "react";

export default function ({ src, w = 300, h = 200 }) {
  return (
    <div
      className="Image"
      style={{
        width: `${w}px`,
        height: `${h}px`,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px"
      }}
    />
  );
}
