// import { Link } from "react-router-dom";
const SideBarOptions = () => {
  return (
    <>
      <div className=" flex flex-col  rounded-xl  mr-2 ">
        <div className="flex hover:bg-slate-400 w-fit px-2 py-1 my-2 rounded-xl cursor-pointer ">
          <img
            src="https://th.bing.com/th/id/OIP.Dg3qUs3KSaEdq2E9rrVfzQHaE9?w=245&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
            alt="Business img"
            className="h-12 w-14  rounded-xl"
          />
          <p className="my-auto px-1">Sports</p>
        </div>

        <div className="flex hover:bg-slate-400 w-fit px-2 py-1 my-2 rounded-xl cursor-pointer ">
          <img
            src="https://th.bing.com/th/id/OIP.nCwP2IE7R18efcP2nMp-QAHaDh?w=327&h=166&c=7&r=0&o=5&dpr=1.1&pid=1.7"
            alt="Business img"
            className="h-12 w-14  rounded-xl"
          />
          <p className="my-auto px-1">Business</p>
        </div>

        <div className="flex hover:bg-slate-400 w-fit px-2 py-1 my-2 rounded-xl cursor-pointer ">
          <img
            src="https://th.bing.com/th/id/OIP.4i5LX9hP1jcz7jq5MsoKRQHaEo?w=250&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
            alt="Business img"
            className="h-12 w-14  rounded-xl"
          />
          <p className="my-auto px-1">Music</p>
        </div>

        <div className="flex hover:bg-slate-400 w-fit px-2 py-1 my-2 rounded-xl cursor-pointer ">
          <img
            src="https://th.bing.com/th/id/OIP.sTRc_SWA30RFpG1qOoQN1QHaE8?w=269&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7"
            alt="Business img"
            className="h-12 w-14  rounded-xl"
          />
          <p className="my-auto px-1">Science</p>
        </div>

        <div className="flex hover:bg-slate-400 w-fit px-2 py-1 my-2 rounded-xl cursor-pointer ">
          <img
            src="https://th.bing.com/th/id/OIP.i3yNu60jPWTF-Q_3FaXpVAHaE7?w=291&h=194&c=7&r=0&o=5&dpr=1.1&pid=1.7"
            alt="Business img"
            className="h-12 w-14  rounded-xl"
          />
          <p className="my-auto px-1">Education</p>
        </div>
      </div>
    </>
  );
};

export default SideBarOptions;
