import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useConversationContext } from "../context/ConversationContext";
import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversationContext();

  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (message) => {
        message.shouldShake = true;
        setMessages((prevMessages) => [...prevMessages, message]);
        const sound  = new Audio(notificationSound);
        sound.play();
      
      });

      return () => {
        socket.off("newMessage");
      };
    }
  }, [socket, setMessages, messages]);

};

export default useListenMessages;
