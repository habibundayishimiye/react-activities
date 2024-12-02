import React, { useState } from "react";

const CheckboxForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div>
      <h2>Checkbox Form</h2>
      <form>
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("Option 1")}
          />
          Option 1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("Option 2")}
          />
          Option 2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange("Option 3")}
          />
          Option 3
        </label>
      </form>
      <p>Selected Options: {selectedOptions.join(", ")}</p>
    </div>
  );
};

export default CheckboxForm;
