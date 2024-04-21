import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    
    const fetchConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (!res.ok) {
          toast.error("Error " + res.status + " : " + data.error);
          throw new Error(data.error);
        }
        setConversations(data);


      } catch (error) {
        toast.error("Some error occoured... Please try again after some time");
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);
  

  return { conversations, loading };

  
};

export default useConversation;
