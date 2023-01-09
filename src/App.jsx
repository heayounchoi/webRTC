import React, { useState } from "react";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";

const socket = io("http://localhost:8080", {
  cors: {
    origin: "*",
  },
});

function App() {
  const navigate = useNavigate();
  const [roomStatus, setRoomStatus] = useState(false);
  const handleCreateRoom = () => {
    socket.emit("create_room", { payload: "create a room!" }, () => {
      setRoomStatus(true);
    });
  };

  const handleEnterRoom = () => {
    socket.emit("enter_room", { payload: "navigate me to a room" }, () => {
      navigate("/room");
    });
  };

  return (
    <>
      <input placeholder="방 제목"></input>
      <button onClick={handleCreateRoom}>방 만들기</button>
      {roomStatus && (
        <div>
          방 활성화 됐당<button onClick={handleEnterRoom}>방 들어가기</button>
        </div>
      )}
    </>
  );
}

export default App;
