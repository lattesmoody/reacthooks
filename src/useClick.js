import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";

import "./styles.css";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []); //dependency 미존재
  if (typeof onClick !== "function") {
    return;
  }
  return element;
};
export default function App() {
  const sayHello = () => console.log("say HELLO");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

// reference: component의 어떤 부분을 선택할 수 있는 방법
