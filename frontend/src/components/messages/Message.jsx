import React, { useContext } from "react";
import { useConversationContext } from "../../context/ConversationContext";
import { AuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  const { selectedConversation } = useConversationContext();
  const { AuthUser } = useContext(AuthContext);
  const fromMe = message.senderID === AuthUser._id;




  return (
    <div className={` chat ${fromMe ? " chat-end " : " chat-start"} flex flex-col sm:mr-3 lg:mr-0`}>
      <div className={`flex chat justify-start ${fromMe ? "flex-row-reverse" : ""}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={`${
                fromMe
                  ? AuthUser.profilePic
                  : selectedConversation.profilePicture
              }`}
            />
          </div>
        </div>

        <div
          className={`chat-bubble text-white ${
            fromMe ? "bg-blue-500" : ""
          } pb-2`}>
          {message.message}
        </div>
      </div>

      <div className="chat-footer opacity-50 text-xs flex items-center">
        {/* time */}
        {new Date(message.createdAt).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Message;
