import { useState } from "react";
import * as React from "react";
import Post from './Post.jsx'

function ListInput() {
  const [inputValue, setInputValue] = useState("");
  const groceryList = []; 

  const onSubmit = (event) => {
    event.preventDefault();
    alert(`The item you entered was: ${inputValue}`);
    groceryList.push(inputValue);
    
  }
  

  return (
    <>
     <form onSubmit={onSubmit} >
      <label>Enter your name:
        <input
          type="text" 
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type='submit' />
      </label>
    </form>

    <div className="posts-container">
	{groceryList.map((post, index) => (
		<Post key={index} index={index} post={post} />
	))}
	</div>
    </>
   
  );
}

export default ListInput;
