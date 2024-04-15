import React, { useEffect } from "react";

const GenderCheckbox = ({handleCheckbox}) => {



  const handleChange = (e) => {
    // setGender(e.target.value);
    handleCheckbox(e.target.value);
  };
  return (
    <div className="flex justify-center space-x-3 mt-4">
      <div className="form-control">
        <label htmlFor="genderMale" className={`label gap-2 cursor-pointer`}>
          <span className=" label-text">Male</span>
          <input
            type="radio"
            name="radio1"
            id="genderMale"
            required={true}
            value="male"
            className="radio border-slate-900"
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="genderFemale" className={`label gap-2 cursor-pointer`}>
          <span className=" label-text">Female</span>
          <input
            type="radio"
            name="radio1"
            id="genderFemale"
            value="female"
            className="radio border-slate-900"
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="genderOther" className={`label gap-2 cursor-pointer`}>
          <span className=" label-text">Other</span>
          <input
            type="radio"
            name="radio1"
            id="genderOther"
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
