import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";
// preventLeave: 사용자에게 아직 저장하지 않았다고 알리는 것.
// beforeunload: window가 닫히기 전에 function이 실행되는 걸 허락함.
// enablePrevent와 disablePrevent 차이점: window.addEventListener / window.removeEventListener 사용 여부
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
    console.log("enablePrevent 실행 완료");
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
    console.log("disablePrevent 실행 완료");
  };
  return { enablePrevent, disablePrevent };
};

export default function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  );
}
