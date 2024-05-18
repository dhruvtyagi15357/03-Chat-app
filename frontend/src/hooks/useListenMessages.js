import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useConversationContext } from "../context/ConversationContext";
const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversationContext();

  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (message) => {
        console.log("new message received: ", message);
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      return () => {
        socket.off("newMessage");
      };
    }
  }, [socket, setMessages, messages]);

};

export default useListenMessages;
