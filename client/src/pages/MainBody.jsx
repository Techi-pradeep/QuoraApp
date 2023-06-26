import SideBar from "../components/sidebar/SideBar"
import Widget from "../components/Widget"
import PostSection from "../components/postSection"

const MainBody = () => {
  return (
   <section className="flex md:mx-12 ">
     
     <SideBar/>
     <PostSection/>
     <Widget/>
   </section>
  )
}

export default MainBody