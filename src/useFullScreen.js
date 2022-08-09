import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";

//https://i.ytimg.com/vi/lw-1QX47ocA/sddefault.jpg

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      if (element.current.webkitRequestFullscreen)
        element.current.webkitRequestFullScreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const callback = (isFull) => {
    console.log(isFull ? "We are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(callback);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          ref={element}
          src="https://i.ytimg.com/vi/lw-1QX47ocA/sddefault.jpg"
        ></img>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}
