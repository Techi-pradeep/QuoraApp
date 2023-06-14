import { Avatar } from "@mui/material";
import { BsQuestionOctagon, BsPencilSquare } from "react-icons/bs";
import { SlPencil } from "react-icons/sl";




import { useState } from 'react';

const QuestionBox = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', inputValue);
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="flex justify-around pt-2 mx-2 gap-6">
        <Avatar />
        <input
          type="text"
          placeholder="What do you want to Ask or Share"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-around w-full py-4 mt-4 bg-gray-100">
        <div className="flex items-center cursor-pointer ring-2 p-2 rounded">
          <BsQuestionOctagon />
          <button className=" border-black hover:text-blue-800 ">Ask</button>
         
        </div>
      
        <div className="flex items-center cursor-pointer  ring-2 p-2 rounded">
          <BsPencilSquare />
          <button className=" border-black">Answer</button>
        </div>
        <div className="flex items-center cursor-pointer  ring-2 p-2 rounded">
          <SlPencil />
          <button onClick={handleSubmit}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;

