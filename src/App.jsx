import React from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8080", {
  cors: {
    origin: "*",
  },
});

function App() {
  const sendServer = () => {
    socket.emit("yay", { payload: "yay" });
  };

  return <button onClick={sendServer}>방 만들기</button>;
}

export default App;
