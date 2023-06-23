import { useState, useEffect, useContext } from "react";
// avatar component from chakra ui
import { Avatar } from "@chakra-ui/react";
// react-icons
import { GoHome } from "react-icons/go";
import { RxTable } from "react-icons/rx";
import { SlNote, SlGlobe, SlPeople } from "react-icons/sl";
import { MdNotificationsNone } from "react-icons/md";
// chakra ui modal fro signIn and login and Logout
import { Button, ButtonGroup } from '@chakra-ui/react'
import AuthModal from "./AuthModal";

import AuthContext from "../auth/AuthContext";

import Cookies from "js-cookie"
const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthenticated(false);
    Cookies.remove("firbase_token")
  };

  useEffect(() => {
    authenticated ? setIsModalOpen(false) : setIsModalOpen(true);
    //   const timeout = setTimeout(() => {
    //     setIsModalOpen(true);
    //   }, 2000);

    //   return () => clearTimeout(timeout);
    //
  }, [authenticated]);

  return (
    <div className="flex text-2xl text-center bg-white place-items-center justify-evenly">
      <h3 className="flex text-3xl font-bold text-red-600">Quora</h3>
      <div className="flex text-2xl cursor-pointer ">
        <GoHome className="mx-2 text-gray-600 cursor-pointer hover:text-red-600" />
        <RxTable className="mx-2 text-gray-600 cursor-pointer hover:text-red-600" />
        <SlNote className="mx-2 text-gray-600 cursor-pointer hover:text-red-600" />
        <SlPeople className="mx-2 text-gray-600 cursor-pointer hover:text-red-600" />
        <MdNotificationsNone className="mx-2 text-gray-600 cursor-pointer hover:text-red-600 " />
      </div>
      <div className="searchBox ">
        <input
          type="text"
          placeholder="Search Quora"
          className="text-center border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="mx-2">
        <button className="px-2 text-xl rounded-full bg-slate-200">
          Try Quora+
        </button>
      </div>
      <div className="flex items-center">
        <Avatar
          alt="Profile Img"
          src="/images/mypic.jpg"
          className="mx-4 my-1"
        />
        <SlGlobe className="hover:text-red-600" />
      </div>
      <button className="px-2 text-xl text-white bg-red-600 rounded-full hover:rounded-lg">
        Add Question
      </button>

      {authenticated ? (
        <Button onClick={handleLogout} className="danger">
          Log Out
        </Button>
      ) : (
        isModalOpen && <AuthModal />
      )}
    </div>
  );
};

export default Header;
