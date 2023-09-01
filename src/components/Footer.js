import React from "react";
import Group1 from "../assets/logo.svg";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="border-t-2 border-gray-200 mt-32">
      <div className="mx-20 p-6 space-y-12">
        <div className="flex space-x-16 items-start">
          <div className>
            <img src={Group1} alt="" style={{width:"100px", height:"100px"}}/>
            <p>Card Payments made easy</p>
            <button className="bg-blue-200 text-blue-600 p-2 rounded-full mt-4 hover:bg-blue-600 hover:text-white transition-all duration-200 ease-out">
              <Icon icon="line-md:linkedin" className="h-10 w-10" />
            </button>
          </div>
          <div className="flex flex-col space-y-2">
              <h5 className="font-medium text-lg">Pages</h5>
              <p className="font-light">Home</p>
              <p className="font-light">Contact</p>
              <p className="font-light">About Us</p>
          </div>
          <div className="flex flex-col space-y-2">
              <h5 className="font-medium text-lg">Our Progress</h5>
              <p className="font-light">Youtube</p>
          </div>
        </div>

        {/* ======== */}
        <h5 className="text-center font-medium my-16">
          Copyright &copy; 2022 <span className="text-blue-600">Money Sync</span>.
          All rights reserved.
        </h5>
      </div>
    </div>
  );
}

export default Footer;
