import Form from "../components/Form"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "./Footer"
import BloodGroups from "./BloodGroups"
import Features from "./Features"
import Testimonials from "./Testimonials"
import Loader from "../components/Loader"
function Home() {
  return (
    <div className="w-full h-full">
        {/* navbar */}
        <Navbar/>

      <div className="flex flex-col items-center">
        {/* hero */}
        <Hero/>

        {/* form */}
        <Form/>

        {/* Blood Groups */}
        <BloodGroups/>

        {/* features */}
        <Features/>

        {/* testimonials */}
        <Testimonials/>

        {/* footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Home
