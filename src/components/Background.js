import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Background({ page }) {
  let body = document.querySelector("body");
  const { width } = useWindowDimensions();

  useEffect(() => {
    body.style.backgroundImage = `url(../assets/${page}/background-${page}-mobile.jpg)`;

    if (width > 768 && width < 1440) {
      body.style.backgroundImage = `url(../assets/${page}/background-${page}-tablet.jpg)`;
    }
    if (width > 1440) {
      body.style.backgroundImage = `url(../assets/${page}/background-${page}-desktop.jpg)`;
    }
    console.log(width);
  }, [page, width]);

  return ReactDOM.createPortal(
    <div style={{}}></div>,
    document.querySelector("body")
  );
}

export default Background;
