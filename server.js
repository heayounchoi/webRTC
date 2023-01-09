import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import views from "express-react-views";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "jsx");
app.engine("jsx", views.createEngine());
app.set("views", __dirname + "/src");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("App"));

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const handleListen = () => console.log("Listening on 8080");

io.on("connection", (socket) => {
  console.log(socket);
  socket.on("yay", (msg) => console.log(msg));
});

server.listen(8080, handleListen);
