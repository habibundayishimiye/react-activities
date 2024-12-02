import React, { useState } from "react";

const SingleInputForm = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>Controlled Form</h2>
      <form>
        <label>
          Enter Text:
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
      </form>
      <p>Entered Value: {value}</p>
    </div>
  );
};

export default SingleInputForm;
