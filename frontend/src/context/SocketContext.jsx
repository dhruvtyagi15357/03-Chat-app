
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { AuthUser } = useContext(AuthContext);

  useEffect(() => {
    console.log("attempting to connect to socket");
    if (AuthUser) {
      const newSocket = io( "localhost:8000" , {
        query: { userID: AuthUser._id },
      });
      // console.log(newSocket);
      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users) => {
        // console.log("online users: ", users);
        setOnlineUsers(users);
      });


      return () => newSocket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [AuthUser]);

  

  return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>;
};

