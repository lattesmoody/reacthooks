import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";

// useScroll: user가 스크롤 해서 무언갈 지나쳤을 때 무엇을 바꾸어야 할 때.

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    // console.log("y ", window.scrollY, "x ", window.scrollX);
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        hello
      </h1>
    </div>
  );
}
