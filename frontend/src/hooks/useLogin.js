import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (user) => {
    if (!inputValidation(user)) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        // res.ok is true if status code is 200-299
        toast.success("User signed in!");
      } else {
        setLoading(false);
        return toast.error("Error " + res.status + " : " + data.error);
        // throw new Error(data.error);
      }
      console.log(data);

      // local storage
      localStorage.setItem("chat-app", JSON.stringify(data));
      // Context
      setAuthUser(data);
    } catch (error) {
      toast.error("Some error occoured... Please try again after some time");
    } finally {
      setLoading(false);
    }
  };
  return { login: login, loading };
};

export default useLogin;

function inputValidation(user) {
  if (!user.username || !user.password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (user.password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }
  return true;
}
