import React, { useContext } from "react";
import { useConversationContext } from "../../context/ConversationContext";
import { AuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  const { selectedConversation } = useConversationContext();
  const { AuthUser } = useContext(AuthContext);
  const fromMe = message.senderID === AuthUser._id;

  console.log(AuthUser.profilePic, selectedConversation.profilePicture);
  return (
    <div className={`chat chat-${fromMe ? "end" : "start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={`${
              fromMe ? AuthUser.profilePic : selectedConversation.profilePicture
            }`}
          />
        </div>
      </div>

      <div className={`chat-bubble text-white ${fromMe ? "bg-blue-500" : ""} `}>
        {message.message}
      </div>

      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {/* time */}
        { new Date(message.createdAt).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Message;
