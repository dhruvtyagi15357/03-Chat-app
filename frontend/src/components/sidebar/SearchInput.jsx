import React from 'react'
import {IoSearchSharp} from 'react-icons/io5'

const SearchInput = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target[0].value
        console.log(username)
    }
  return (
    <form onSubmit={handleSubmit} className=" flex gap-x-2 items-center pb-2">
      <input
        type="text"
        required
        className=" input input-bordered rounded-full"
        placeholder="Enter your username"
      />

      <button type="submit" className=" btn btn-circle hover:bg-sky-500 text-white">
        <IoSearchSharp className='w-6 h-6 outline-none'/>
      </button>
    </form>
  );
}

export default SearchInput





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