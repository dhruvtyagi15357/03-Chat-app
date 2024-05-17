import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useConversationContext } from "../../context/ConversationContext";
import useConversation from "../../hooks/useConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { selectedConversation, setSelectedConversation } = useConversationContext();
  const { conversations } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "" || search.length < 3) toast.error("Please enter a username longer than 3 characters");
    else {
      console.log(conversations)
      const user = conversations.users.find(
        (c) => c.username.toLowerCase().includes(search.toLowerCase())
      );

      if (user) {
        setSelectedConversation(user);
        setSearch("");
      }
      
      if (!user) {
        toast.error("User not found");
      } else {
        setSelectedConversation(user);
      }
    }

    console.log(selectedConversation);
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-x-2 items-center pb-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" input input-bordered rounded-full"
        placeholder="Enter your username"
      />

      <button
        type="submit"
        className=" btn btn-circle hover:bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

// import React from 'react'
// import {IoSearchSharp} from 'react-icons/io5'

// const SearchInput = () => {
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const username = e.target[0].value
//         console.log(username)
//     }
//   return (
//     <form onSubmit={handleSubmit} className=" flex gap-x-2 items-center">
//       <input
//         type="text"
//         required
//         className=" input input-bordered rounded-full"
//         placeholder="Enter your username"
//       />

//       <button type="submit" className=" btn btn-circle hover:bg-sky-500 text-white">
//         <IoSearchSharp className='w-6 h-6 outline-none'/>
//       </button>
//     </form>
//   );
// }

// export default SearchInput
