import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChat = true;
  return (
    <div className="min-w-[450px] flex flex-col ">
      {noChat ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To: </span>{" "}
            <span className="text-gray-900 font-bold">John Doe</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="px-4 sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 text-center">
        <h2 className="text-2xl font-bold">No chat selected</h2>
        <p className="">
          Welcome john doe
        </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
}

export default MessageContainer;
