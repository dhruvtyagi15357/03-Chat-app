import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";


const Sidebar = () => {
  return (
    <div className="border-slate-500 flex-col border-r p-4 flex ">
      <SearchInput />
      <div className="divider px-3 m-0"></div>
      <Conversations />
      <LogoutButton/>
    </div>
  );
};

export default Sidebar;
