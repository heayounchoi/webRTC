import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const handleListen = () => console.log("Listening on 8080");

io.on("connection", (socket) => {
  socket.on("create_room", (msg, done) => {
    console.log(msg);
    done();
  });
  socket.on("enter_room", (msg, done) => {
    console.log(msg);
    done();
  });
});

server.listen(8080, handleListen);
