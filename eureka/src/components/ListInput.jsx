import { useState } from "react";
import * as React from "react";

function ListInput() {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${inputValue}`);
  }
  

  return (
    <form onSubmit={onSubmit} >
      <label>Enter your name:
        <input
          type="text" 
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type='submit' />
      </label>
    </form>
  );
}

export default ListInput;
