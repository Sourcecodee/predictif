import Boomakers from "./Boomakers"
import Enhance from './Enhance'
import NavBar from "./NavBar"


const Hero = () => {
  return (
    <div className="bg-white container mx-auto">
        <NavBar/>
        <Boomakers/>
        <Enhance/>
    </div>
  )
}

export default Hero