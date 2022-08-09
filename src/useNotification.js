import React, { useEffect, useState, useRef } from "react";
import ReactDom from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title.options);
    }
  };
  return fireNotif;
};
export default function App() {
  const triggerNotif = useNotification("penguinRabbit", { body: "SoonDooBoo" });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
}
