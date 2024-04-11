import React from "react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(e.target[0].value);
    console.log(e.target[1].value);
  };
  return (
    // add classes here, left blank for now
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className=" w-full bg-gray-500 p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> Chat Application </span>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className=" label p-2">
                <span className=" text-base label-text">Username</span>
              </label>

              <input
                type="text"
                className=" input input-bordered h-10 w-full"
                placeholder="Enter your username"
              />
            </div>
            <div className="mt-2">
              <label className=" label p-2">
                <span className=" text-base label-text">Password</span>
              </label>

              <input
                type="password"
                className=" input input-bordered h-10 w-full"
                placeholder="Enter your Password"
              />
            </div>
            <div>
              {/* if the user dont have an account */}

              <a
                href="#"
                className="text-sm mt-2 duration-500 hover:underline hover:text-blue-600 inline-block transition-colors ">
                {"Don't"} have an account? Register
              </a>
              {/*  submit button */}
              <button
                type="submit"
                className="btn content-center btn-primary btn-block mt-4 btn-sm p-4">
                Login
              </button>
            </div>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default Login;

// starter code for the login page

// import React from "react";

// const Login = () => {
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
//           Login
//           <span className="text-blue-500"> Chat Application </span>
//           <form onSubmit={handleSubmit}>
//             <div className="mt-4">
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
//             <div>

//               {/* if the user dont have an account */}

//               <a
//                 href="#"
//                 className="text-sm mt-2 duration-500 hover:underline hover:text-blue-600 inline-block transition-colors ">
//                 {"Don't"} have an account? Register
//               </a>
//               {/*  submit button */}
//               <button
//                 type="submit"
//                 className="btn content-center btn-primary btn-block mt-4 btn-sm p-4">
//                 Login
//               </button>
//             </div>
//           </form>
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Login;
