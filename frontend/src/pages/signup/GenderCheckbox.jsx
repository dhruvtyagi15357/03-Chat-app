import React, { useEffect } from "react";

const GenderCheckbox = ({user, setUser}) => {



  const handleChange = (e) => {
    // setGender(e.target.value);
    setUser({...user, gender:e.target.value})
  };
  return (
    <div className="flex">
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className=" label-text">Male</span>
          <input
            type="radio"
            name="radio1"
            value="male"
            className="radio border-slate-900"
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className=" label-text">Female</span>
          <input
            type="radio"
            name="radio1"
            value="female"
            className="radio border-slate-900"
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className=" label-text">Other</span>
          <input
            type="radio"
            name="radio1"
            value="other"
            className="radio border-slate-900"
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
