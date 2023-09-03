import React from "react";
import Group1 from "../assets/logo.svg";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="border-t-2 border-gray-200 mt-16 sm:mt-32">
      <div className="mx-4 sm:mx-20 p-6 space-y-8 sm:space-y-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-16">
          <div className="flex items-center text-center sm:text-left">
            <img src={Group1} alt="" style={{ width: "100px", height: "100px" }} />
            <div className="ml-4">
              <a
                href="https://www.linkedin.com/company/money-sync-pay/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-blue-200 text-blue-600 p-2 rounded-full mt-2 sm:mt-4 hover:bg-blue-600 hover:text-white transition-all duration-200 ease-out">
                  <Icon icon="line-md:linkedin" className="h-6 w-6 sm:h-10 w-10" />
                </button>
              </a>
            </div>
          </div>
          <div className="sm:w-full">
            <div className="flex flex-col space-y-2 mt-4 sm:mt-0 sm:items-start">
              <h5 className="font-medium text-lg">Pages</h5>
              <p className="font-light">Home</p>
              <p className="font-light">About Us</p>
            </div>
            <div className="flex flex-col space-y-2 mt-4 sm:mt-0 sm:items-start">
              <h5 className="font-medium text-lg">Our Progress</h5>
              <a
                href="https://www.linkedin.com/company/money-sync-pay/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="font-light">LinkedIn</p>
              </a>
            </div>
          </div>
        </div>

        <h5 className="text-center font-medium mt-8">
          Copyright &copy; 2022 <span className="text-blue-600">Money Sync</span>.
          All rights reserved.
        </h5>
      </div>
    </div>
  );
}

export default Footer;
