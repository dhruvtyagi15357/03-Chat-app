import React from "react";
import Conversation from "./Conversation";
import useConversation from "../../hooks/useConversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = (props) => {
  const { conversations, loading } = useConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? <span className="loading loading-spinner"></span> : null}
      {conversations.users
        ? conversations.users.map((conversation, idx) => (
            <Conversation
              key={conversation._id}
              conversation={conversation}
              emoji={getRandomEmoji()}
              lastidx = {idx === conversations.users.length-1}
            />
          ))
        : null}
    </div>
  );
};

export default Conversations;

// import React from "react";
// import Conversation from "./Conversation";

// const Conversations = (props) => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// };

// export default Conversations;
