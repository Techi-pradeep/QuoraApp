import { useState } from "react";

import { Avatar } from "@chakra-ui/react";
import { BsQuestionOctagon, BsPencilSquare } from "react-icons/bs";
import { SlPencil } from "react-icons/sl";

// import { Button } from '@chakra-ui/react';
import { PostModal } from "./Post/PostModal";

const QuestionBox = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col bg-white">
      <div className="flex justify-around gap-6 pt-2 mx-2">
        <Avatar />
        <input
          type="text"
          placeholder="What do you want to Ask or Share"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-around w-full py-4 mt-4 bg-gray-100">
        <div className="flex items-center p-2 rounded cursor-pointer ring-2">
          <BsQuestionOctagon />
          <button className="border-black hover:text-blue-800">Ask</button>
        </div>

        <div className="flex items-center p-2 rounded cursor-pointer ring-2">
          <BsPencilSquare />
          <button className="border-black ">Answer</button>
        </div>
        <div className="flex items-center p-2 rounded cursor-pointer ring-2">
          <SlPencil />
          {/* Pop-up on Post button */}
          <PostModal />
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;
