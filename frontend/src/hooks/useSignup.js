import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async (user) => {
    if (!inputValidation(user)) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: user.fullName,
          username: user.username,
          password: user.password,
          confirmPassword: user.rePassword,
          gender: user.gender,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("User created successfully and signed in!");
      } else {
        toast.error("Error " + res.status + " : " + data.error);
        throw new Error(data.error);
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
  return { signup, loading };
};

export default useSignup;

function inputValidation(user) {
  if (
    !user.fullName ||
    !user.username ||
    !user.password ||
    !user.rePassword ||
    !user.gender
  ) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (user.password !== user.rePassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (user.password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }
  return true;
}
