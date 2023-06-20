

import { Avatar } from "@chakra-ui/react";
// react-icons
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMessage } from "react-icons/ai";
import { TbArrowBigUp, TbArrowBigDown } from "react-icons/tb";
import { BsThreeDots, BsShare } from "react-icons/bs";

const PostContent = () => {
  return (
    <>
      <div className="pt-4 mt-1 bg-white ">
        <div className="flex justify-between mx-2">
          <div className="flex ">
            <Avatar />
            <div>
              <div className="flex ">
                <div className="flex pl-4">
                  <h4>Pradeep kumar</h4>
                  <a href="#" className="pl-2 text-blue-500">
                    follow
                  </a>
                </div>
              </div>
              <div className="flex pl-4">
                <p>Wealth comes form Health</p>
                <small>Timestamp</small>
              </div>
            </div>
          </div>

          <RxCross2 className="pr-0" />
        </div>

        <div>
          <p className="p-2 text-justify">
            What you eat go to your heart and fedd your mind . Finally turns
            your personality.
          </p>
          <img
            src="https://images.pexels.com/photos/1034940/pexels-photo-1034940.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="object-cover w-full"
          />
        </div>

        <div className="flex justify-between pb-2 m-2">
          <div className="flex ">
            <div className="pl-0">
              <TbArrowBigUp className="focus:text-green-500 hover:cursor-pointer" />
            </div>

            <div className="pl-4">
              <TbArrowBigDown
                className="focus:text-red-600 hover:cursor-pointer"
              />
            </div>

            <div className="pl-4">
              <AiOutlineMessage className="hover:cursor-pointer" />
            </div>

            <div className="pl-4">
              <BsShare className="hover:cursor-pointer" />
            </div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </div>
      </div>

      <div className="pt-4 mt-4 bg-white ">
        <div className="flex justify-between mx-2">
          <div className="flex ">
            <Avatar />
            <div>
              <div className="flex ">
                <div className="flex pl-4">
                  <h4>Rohit kumar</h4>
                  <a href="#" className="pl-2 text-blue-500">
                    follow
                  </a>
                </div>
              </div>
              <div className="flex pl-4">
                <p>Home is the only place </p>
                <small>Timestamp</small>
              </div>
            </div>
          </div>

          <RxCross2 className="pr-0" />
        </div>

        <div>
          <p className="p-2 text-justify">
            Home is the personality of a person which represent ourself in front of society.
          </p>
          <img
            src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="object-cover w-full"
          />
        </div>

        <div className="flex justify-between pb-2 m-2">
          <div className="flex ">
            <div className="pl-0">
              <TbArrowBigUp className="focus:text-green-500 hover:cursor-pointer" />
            </div>

            <div className="pl-4">
              <TbArrowBigDown
                className="focus:text-red-600 hover:cursor-pointer"
              />
            </div>

            <div className="pl-4">
              <AiOutlineMessage className="hover:cursor-pointer" />
            </div>

            <div className="pl-4">
              <BsShare className="hover:cursor-pointer" />
            </div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </div>
      </div>
      <div className="pt-4 mt-4 bg-white ">
        <div className="flex justify-between mx-2">
          <div className="flex ">
            <Avatar />
            <div>
              <div className="flex ">
                <div className="flex pl-4">
                  <h4>Asha</h4>
                  <a href="#" className="pl-2 text-blue-500">
                    follow
                  </a>
                </div>
              </div>
              <div className="flex pl-4">
                <p>Hope comes every where</p>
                <small>Timestamp</small>
              </div>
            </div>
          </div>

          <RxCross2 className="pr-0" />
        </div>

        <div className="">
          <p className="p-2 text-justify">
          Never lose hope when situation is worse You can find water in the desert.
          </p>
          <img
            src="https://images.pexels.com/photos/15030935/pexels-photo-15030935/free-photo-of-woman-in-dress-walking-in-sand-dunes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className="object-cover w-full "
          />
        </div>

        <div className="flex justify-between pb-2 m-2">
          <div className="flex ">
            <div className="pl-0">
              <TbArrowBigUp className="focus:text-green-500 hover:cursor-pointer" />
            </div>

            <div className="pl-4">
              <TbArrowBigDown
                className="focus:text-red-600 hover:cursor-pointer"
              />
            </div>

            <div className="pl-4">
              <AiOutlineMessage className="hover:cursor-pointer" />
            </div>
            <div className="pl-4">
              <BsShare className="hover:cursor-pointer" />
            </div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostContent;
