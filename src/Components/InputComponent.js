import React, { useState } from "react";

function InputComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="InputContainer">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type here"
      ></input>
      <p className="textOutput">{inputValue}</p>
    </div>
  );
}

export default InputComponent;
