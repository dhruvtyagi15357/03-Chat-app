import React, { useEffect, useState } from "react";
import { useConversationContext } from "../context/ConversationContext";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } =
    useConversationContext();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`,
            {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            }
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation._id) getMessages();
  }, [selectedConversation._id]);

  return { messages, loading };
};

export default useGetMessages;
