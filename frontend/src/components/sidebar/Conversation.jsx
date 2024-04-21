import React from "react";
import { ConversationContextProvider, useConversationContext } from "../../context/ConversationContext";


const Conversation = ({conversation, emoji, lastidx}) => {
// working with context now

  const { selectedConversation, setSelectedConversation } =
    useConversationContext();
  const isSelected = (selectedConversation?selectedConversation._id:null) === conversation._id;

  return (
    <>
      <div
        onClick={() => {setSelectedConversation(conversation)}}
        className={`flex gap-2 items-center ${
          isSelected ? "bg-sky-500" : ""
        } hover:bg-slate-700 transition-all duration-300 rounded p-2 py-1 cursor-pointer`}>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={`${conversation.profilePicture}`} alt="user avatar" />
          </div>
        </div>

        <div className=" flex flex-col flex-1">
          <div className=" flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>

            <span className=" text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastidx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;




// import React from "react";

// const Conversation = () => {
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 transition-all duration-300 rounded p-2 py-1 cursor-pointer">
//         <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img
//               src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//               alt="user avatar"
//             />
//           </div>
//         </div>

//         <div className=" flex flex-col flex-1">
//           <div className=" flex gap-3 justify-between">
//             <p className="font-bold text-gray-200">John Doe</p>

//             <span className=" text-xl">💀</span>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="divider my-0 py-0 h-1"></div>
//       </div>
//     </>
//   );
// };

// export default Conversation;
