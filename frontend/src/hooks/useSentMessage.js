import React, { useState } from "react";
import { useConversationContext } from "../context/ConversationContext";
import toast from "react-hot-toast";

const useSentMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } =
    useConversationContext();

  const sentMessage = async (message) => {
    // this function will take the message from the input field and send it to the server
    setLoading(true);
    try {
      const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      setMessages([...messages, data]);
      // toast.success("Message sent");
    } catch (error) {
      // toast.error("Message not sent");
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sentMessage, loading };
};

export default useSentMessage;
