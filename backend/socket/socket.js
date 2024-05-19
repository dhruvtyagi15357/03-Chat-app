const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

const userSocketMap = {};
const io = new Server(server, {
  cors: {
    // origin: * to allow all origins
    origin: "*",
    methods: ["GET", "POST"],
  },
});


const getSocketId = (userID) => {
  return userSocketMap[userID];
};


io.on("connection", (socket) => {
  // console.log("a user connected", socket.id);
  const userID = socket.handshake.query.userID;
  if (userID) {
    // console.log("user connected with id: ", userID);
    userSocketMap[userID] = socket.id;
  }

  // io.emit is used to send message to all connected clients

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    // console.log("user disconnected", socket.id);
    delete userSocketMap[userID];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

module.exports = { app, io, server, getSocketId };
