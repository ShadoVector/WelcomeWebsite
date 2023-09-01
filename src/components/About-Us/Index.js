import React from "react";
import { Icon } from "@iconify/react";
import hustler from "../pictures/hustler.jpg";
import hacker from "../pictures/hacker.jpg";
import hipster from "../pictures/hipster.jpg";

function Index() {
  return (
    <div className="text-center mx-20 my-12">
      <h1 className="text-6xl font-semibold my-4">About Us</h1>
      <p className="text-light opacity-80 mx-auto">
        A group of like mind coming together
        <br />
        However the development of Money Sync is held by 2 People.
      </p>
      <div className="flex mt-12 justify-between w-2/5 mx-auto">
        
        <div className="flex flex-col items-center border-gray-100 rounded-md border-2 max-w-max py-5 px-10 transition-all duration-150 ease-out hover:scale-105">
          
          <h5 className="font-semibold mt-5">Goutham A</h5>
          <p className="font-light">Founding Technical Member</p>
          <div className="flex mt-8 gap-6 w-max">
            <Icon
              icon="akar-icons:github-fill"
              className="h-7 w-7 text-blue-600 cursor-pointer hover:text-blue-700"
            />
            <Icon
              icon="akar-icons:instagram-fill"
              className="h-7 w-7 text-blue-600 cursor-pointer hover:text-blue-700"
            />
            <Icon
              icon="akar-icons:twitter-fill"
              className="h-7 w-7 text-blue-600 cursor-pointer hover:text-blue-700"
            />
          </div>
        </div>
        <div className="flex flex-col items-center border-gray-100 rounded-md border-2 max-w-max py-5 px-10 transition-all duration-150 ease-out hover:scale-105">
          
          <h5 className="font-semibold mt-5">Nivedita M</h5>
          <p className="font-light">Founding Member</p>
          <div className="flex mt-8 gap-6 w-max">
            <Icon
              icon="akar-icons:github-fill"
              className="h-7 w-7 text-blue-600 cursor-pointer hover:text-blue-700"
            />
            <Icon
              icon="akar-icons:instagram-fill"
              className="h-7 w-7 text-blue-600 cursor-pointer hover:text-blue-700"
            />
            <Icon
              icon="akar-icons:twitter-fill"
              className="h-7 w-7 text-blue-600 cursor-pointer hover:text-blue-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
