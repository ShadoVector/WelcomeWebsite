import React from "react";
import { Icon } from "@iconify/react";
import Group1 from "../pictures/asked.svg";
import { useNavigate } from "react-router-dom";
import Countdown from "./Countdown";

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center horizontally
  justifyContent: 'center', // Center vertically
};

function Contact() {
  let navigate = useNavigate()
  return (
    <div className="mx-20 my-28 flex bg-blue-600 rounded-2xl">
      <div style={{ flexGrow: '100' }} className="flex justify-center flex-col p-8 text-white space-y-4">
     

        <div style={containerStyle}>
        <h2 className="text-4xl font-semibold">Launching Soon in</h2>
          <Countdown />
        </div>


      </div>
      <div style={{ flexGrow: '1' }}>

      </div>
    </div>
  );
}

export default Contact;
