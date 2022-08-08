import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";

import "./styles.css";

export default function App() {
  const potato = useRef();
  useEffect(() => {
    setTimeout(() => potato.current.focus(), 5000); // getElementById()와 같다.
  }, []);
  return (
    <div className="App">
      <div>Hi</div>
      <input ref={potato} placeholder="la" />
    </div>
  );
}

// reference: component의 어떤 부분을 선택할 수 있는 방법
