import React, { SFC } from "react";

import { FaFemale, FaMale } from "react-icons/fa";
import { GenderChoiceProps } from "./type.GenderChoice";

const GenderChoice: SFC<GenderChoiceProps> = ({ gender, setGender }) => {
  const change = ({ target }) => {
    setGender(target.value);
  };

  return (
    <form className="module center gender-choice">
      <p>
        Search for users <strong> by gender </strong>
      </p>

      <label>
        <input
          className="choice male"
          type="radio"
          name="gender"
          value="male"
          onChange={change}
          checked={gender === "male"}
        />
        <span>
          <FaMale />
        </span>
      </label>

      <label>
        <input
          className="choice female"
          type="radio"
          name="gender"
          value="female"
          onChange={change}
          checked={gender === "female"}
        />
        <span>
          <FaFemale />
        </span>
      </label>
    </form>
  );
};

export default GenderChoice;
