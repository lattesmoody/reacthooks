import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";
// useBeforeLeave: 탭을 닫을 때 실행되는 function

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle); //mouseleave 대신 mousemove도 가능.
    return () => document.removeEventListener("mouseleave", handle);
  });

  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    //console.log(event);
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
};

export default function App() {
  const begForLife = () => {
    console.log("Pls don't leave");
  };
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}
