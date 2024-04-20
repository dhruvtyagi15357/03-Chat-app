import React from "react";
import GenderCheckbox from "./GenderCheckbox";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    password: "",
    rePassword: "",
    gender: "",
  });

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };
  const { signup, loading } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(user);
    console.log(user);
  };

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full bg-gray-500 p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500"> Chat Application </span>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className=" label p-2">
                <span className=" text-base label-text">Full Name</span>
              </label>

              <input
                type="text"
                value={user.fullName}
                required
                className=" input input-bordered h-10 w-full"
                placeholder="Enter your Full Name"
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              />
            </div>
            <div className="mt-2">
              <label className=" label p-2">
                <span className=" text-base label-text">Username</span>
              </label>

              <input
                type="text"
                required
                value={user.username}
                className=" input input-bordered h-10 w-full"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter your username"
              />
            </div>
            <div className="mt-2">
              <label className=" label p-2">
                <span className=" text-base label-text">Password</span>
              </label>

              <input
                type="password"
                required
                value={user.password}
                className=" input input-bordered h-10 w-full"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter your Password"
              />
            </div>
            <div className="mt-2">
              <label className=" label p-2">
                <span className=" text-base label-text">Re-enter password</span>
              </label>

              <input
                type="password"
                required
                value={user.rePassword}
                className=" input input-bordered h-10 w-full"
                onChange={(e) =>
                  setUser({ ...user, rePassword: e.target.value })
                }
                placeholder="Re-enter your Password"
              />
            </div>
            <GenderCheckbox
              handleCheckbox={handleCheckbox}
              user={user}
              setUser={setUser}
            />

            <div>
              {/* if the user dont have an account */}

              <Link
                to="/login"
                className="text-sm mt-2 duration-500 hover:underline hover:text-blue-600 inline-block transition-colors ">
                Already have an account? Login
              </Link>
              {/*  submit button */}
              <button
                type="submit"
                disabled={loading}
                className="btn content-center btn-primary btn-block mt-4 btn-sm p-4">
                {loading ? (
                  <span className="loading loading-spinner" />
                ) : (
                  "Sign up"
                )}
              </button>
            </div>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default Signup;

// starter code for the signup page

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox';

// import { useState, useEffect } from "react";

// const Signup = () => {
//   const [gender, setGender] = useState("");

//   //   console log gender when it updates using useeffect
//   useEffect(() => {
//     console.log(gender);
//   }, [gender]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("submitted");
//     console.log(e.target[0].value);
//     console.log(e.target[1].value);
//   };
//   return (
//     // add classes here, left blank for now
//     <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className=" w-full bg-gray-500 p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className=" text-3xl font-semibold text-center text-gray-300">
//           Signup
//           <span className="text-blue-500"> Chat Application </span>
//           <form onSubmit={handleSubmit}>
//             <div className="mt-4">
//               <label className=" label p-2">
//                 <span className=" text-base label-text">Full Name</span>
//               </label>

//               <input
//                 type="text"
//                 className=" input input-bordered h-10 w-full"
//                 placeholder="Enter your Full Name"
//               />
//             </div>
//             <div className="mt-2">
//               <label className=" label p-2">
//                 <span className=" text-base label-text">Username</span>
//               </label>

//               <input
//                 type="text"
//                 className=" input input-bordered h-10 w-full"
//                 placeholder="Enter your username"
//               />
//             </div>
//             <div className="mt-2">
//               <label className=" label p-2">
//                 <span className=" text-base label-text">Password</span>
//               </label>

//               <input
//                 type="password"
//                 className=" input input-bordered h-10 w-full"
//                 placeholder="Enter your Password"
//               />
//             </div>
//             <div className="mt-2">
//               <label className=" label p-2">
//                 <span className=" text-base label-text">Re-enter password</span>
//               </label>

//               <input
//                 type="password"
//                 className=" input input-bordered h-10 w-full"
//                 placeholder="Re-enter your Password"
//               />
//             </div>
//             <GenderCheckbox setGender={setGender} />

//             <div>
//               {/* if the user dont have an account */}

//               <a
//                 href="#"
//                 className="text-sm mt-2 duration-500 hover:underline hover:text-blue-600 inline-block transition-colors ">
//                 Already have an account? Login
//               </a>
//               {/*  submit button */}
//               <button
//                 type="submit"
//                 className="btn content-center btn-primary btn-block mt-4 btn-sm p-4">
//                 Sign up
//               </button>
//             </div>
//           </form>
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default Signup
