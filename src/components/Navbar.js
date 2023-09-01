import { Link } from "react-router-dom";
import Group1 from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="h-24 sticky top-0 z-50 flex flex-cols justify-between px-20 items-center border-b-gray-100 border-b-2 bg-white">
      <div className="flex">
        <Link to="/">
          {" "}
          <img src={Group1} alt="" style={{width: "100px", height:"100px"}}/>
        </Link>
      </div>

      <div className="flex space-x-8 items-center">
        <Link to="/" className="font-medium hover:border-b-2 hover:border-black">Home</Link>
        <Link to="/about-us" className="font-medium hover:border-b-2 hover:border-black">About Us</Link>
        <a href="#" rel="noreferrer" target="_blank" className="bg-blue-600 py-2 px-4 rounded text-white font-semibold hover:bg-blue-700">Coming Soon</a>
      </div>
    </nav>
  );
}

export default Navbar;
