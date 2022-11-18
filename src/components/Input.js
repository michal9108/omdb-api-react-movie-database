import React from "react";
import '../App.css';


const Input = ({ handleSearch }) => {
  return (
   
    <div className='input-wrapper'>
      <input
        className='search'
        placeholder='Search...'
        onChange={handleSearch}
      />
 
    </div>
  
  );
};

export default Input;