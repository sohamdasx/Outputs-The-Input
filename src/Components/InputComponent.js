import React, { useState } from "react";

function InputComponent() {
  const [inputValue, setInputValue] = useState("");
  const [showInputBox, setShowInputBox] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputBox = () => {
    setShowInputBox(!showInputBox);
  };

  return (
    <div className="InputContainer">
      {showInputBox && (
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Type here"
        ></input>
      )}
      <p className="textOutput">{inputValue}</p>
      <button onClick={handleInputBox}>Show/Hide</button>
    </div>
  );
}

export default InputComponent;
