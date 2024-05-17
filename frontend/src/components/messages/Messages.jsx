import React, { useContext, useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages';
import { TiMessages } from "react-icons/ti";
import MessageSkeleton from '../skeletons/MessageSkeleton';
import { AuthContext } from '../../context/AuthContext';

const Messages = () => {
  const {messages, loading} = useGetMessages();
  // console.log(messages.keys()); array iterator. 
  // convert to array of messages

  // scroll to the bottom of the messages
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

              const { AuthUser } = useContext(AuthContext);


  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading ? (
        <>
          <MessageSkeleton />
          <MessageSkeleton />
          <MessageSkeleton />
        </>
      ) : // check the length of the messages array
      messages.length > 0 ? (
        messages.map((message) =>{ 
            const fromMe = message.senderID === AuthUser._id;
          return (
            <div
              className={`chat chat-${fromMe ? "end" : "start"}`}
              key={message._id}
              ref={lastMessageRef}>
              <Message message={message} />
            </div>
          );})
      ) : (
        // <p>No messages yet</p> should be at the center of the screen and at middle
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="px-4 sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2 text-center">
            <h2 className="text-2xl font-bold">No messages found</h2>
            <p>Start chatting by sending them a message!</p>
            <TiMessages className="text-3xl md:text-6xl text-center" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages