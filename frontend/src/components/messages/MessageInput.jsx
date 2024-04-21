import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSentMessage from "../../hooks/useSentMessage";
import toast from "react-hot-toast";

const MessageInput = () => {
  const { sentMessage, loading } = useSentMessage();
  const [message, setMessage] = useState("");
  return (
    <form onSubmit={
      (e) => {
        e.preventDefault();
        const message = e.target[0].value;
        if (!message) 
          return toast.error("Message cannot be empty");

        sentMessage(message);

        setMessage("");
      }
    
    } className="px-4 my-3 pr-6">
      <div className="w-full relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border text-sm rounded-lg block w-full p-2 5 bg-gray-700 border-gray-600 text-white"
          placeholder="Start typing..."
        />
        <button className="absolute inset-y-0 end-0 flex items-center pe-3">
          <BsSend/>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
