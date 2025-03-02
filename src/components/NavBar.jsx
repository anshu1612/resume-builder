import { PiReadCvLogoFill } from "react-icons/pi";

const NavBar = () => {
  return (
    <div className="flex p-6  text-center shadow-md ">
        <PiReadCvLogoFill className="text-blue-500 text-3xl mr-1 ml-4"/>
        <h1 className="font-semibold text-xl">Quick </h1>
        <h1 className="font-semibold text-blue-500 text-xl"> Resume</h1>
    </div>
  )
}

export default NavBar