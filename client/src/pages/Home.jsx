import Header from "../components/Header";
import MainBody from "./MainBody";
const Home = () => {
  return (
    <>
      <Header />
      <div className="min-h-full  bg-slate-200">
        <MainBody />
      </div>
    </>
  );
};

export default Home;
