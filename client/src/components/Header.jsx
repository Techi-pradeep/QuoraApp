// material-ui icons
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Avatar from "@mui/material/Avatar";

// react-icons-----first 2 letters of"{}" should be in lowercase at last of line-----

import { GoHome } from "react-icons/go";
import { RxTable } from "react-icons/rx";
import { SlNote, SlGlobe,SlPeople } from "react-icons/sl";
import { MdNotificationsNone } from "react-icons/md";
// // import { BsSearch } from "react-icons/bs";
// import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className=" flex bg-white   text-center text-2xl place-items-center justify-evenly">
      <h3 className="flex text-red-600 text-3xl font-bold">Quora</h3>
      {/* <HomeOutlinedIcon/> */}
      <div className="flex text-2xl cursor-pointer ">
        <GoHome className="mx-2 text-gray-600 hover:text-red-600 cursor-pointer" />
        <RxTable className="mx-2 text-gray-600 hover:text-red-600 cursor-pointer" />
        <SlNote className="mx-2  text-gray-600 hover:text-red-600 cursor-pointer" />
        <SlPeople className="mx-2 text-gray-600 hover:text-red-600 cursor-pointer" />
        <MdNotificationsNone className="mx-2  text-gray-600 hover:text-red-600 cursor-pointer " />
      </div>

      <div className="searchBox  ">
        <input type="text" placeholder="Search Quora" className="text-center border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
        {/* <BsSearch /> */}
      </div>

      <div className="mx-2">
        <button className="rounded-full bg-slate-200 text-xl  px-2">
          Try Quora+
        </button>
      </div>

      <div className="flex items-center">
        <Avatar
          alt="Profile Img"
          src="/images/mypic.jpg"
          className="mx-4 my-1"
        />
        <SlGlobe className=" hover:text-red-600" />
      </div>
      <button className="rounded-full hover:rounded-lg bg-red-600 text-white  px-2 text-xl ">
        Add Question
      </button>
    </div>
  );
};

export default Header;
