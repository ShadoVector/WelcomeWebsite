import { Icon } from "@iconify/react";
import Group1 from "../pictures/moneysync-mockup.svg";

function Features() {
  return (
    <div className="flex mx-20 space-x-6 my-40">
      <div style={{ flexGrow: "2" }} className="space-y-4">
        <h2 className="font-semibold text-5xl my-4 ">Our Features</h2>
        <div id="atas" className="flex space-x-4">
          <div
            className="flex border-[1.6px] p-4 rounded-md gap-x-4"
            style={{ flexGrow: "2" }}
          >
            {/* <PaperAirplaneIcon className="bg-blue-200 h-14 rounded-full p-3 rotate-45"/> */}
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-20">
              {" "}
              <Icon
                icon="mdi:shop-outline"
                className="text-blue-600 h-10 w-10 ml-1 -rotate-0 mb-1"
              />
            </div>
            <div>
              <h5 className="font-semibold text-lg">Instant Merchant Transfer</h5>
              <p className="text-gray-600">
                Send or request money to your friends easily.
              </p>
            </div>
            
          </div>
          
          <div
            className="flex border-[1.6px] p-4 rounded-md gap-x-4"
            style={{ flexGrow: "3" }}
          >
            {/* <PaperAirplaneIcon className="bg-blue-200 h-14 rounded-full p-3 rotate-45"/> */}
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-20">
              {" "}
              <Icon
                icon="ic:round-add-card"
                className="text-blue-600 h-10 w-10"
              />
            </div>
            <div>
              <h5 className="font-semibold text-lg">Card Management and Analysis</h5>
              <p className="text-gray-600">
                Provide all you need, split bill, group payment, virtucard, etc.
              </p>
            </div>
          </div>
        </div>
        
        <div id="bawah" className="flex space-x-4">
          <div
            className="flex border-[1.6px] p-4 rounded-md gap-x-4"
            style={{ flexGrow: "3" }}
          >
            {/* <PaperAirplaneIcon className="bg-blue-200 h-14 rounded-full p-3 rotate-45"/> */}
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-20">
              {" "}
              <Icon
                icon="ri:p2p-fill"
                className="text-blue-600 h-10 w-10 ml-1  mb-1"
              />
            </div>
            <div>
              <h5 className="font-semibold text-lg">Peer to Peer</h5>
              <p className="text-gray-600">
                To boost our user experience, we make it more interactive and
                fun.
              </p>
            </div>
          </div>

          <div
            className="flex border-[1.6px] p-4 rounded-md gap-x-4"
            style={{ flexGrow: "2" }}
          >
            {/* <PaperAirplaneIcon className="bg-blue-200 h-14 rounded-full p-3 rotate-45"/> */}
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-20">
              {" "}
              <Icon icon="material-symbols:tap-and-play" className="text-blue-600 h-10 w-10" />
            </div>
            <div>
              <h5 className="font-semibold text-lg">Tap and Pay</h5>
              <p className="text-gray-600">
                Send or request more fast with qr code scan.
              </p>
            </div>
          </div>
        </div>
        <div id="atas" className="flex space-x-4">
          <div
            className="flex border-[1.6px] p-4 rounded-md gap-x-4"
            style={{ flexGrow: "2" }}
          >
            {/* <PaperAirplaneIcon className="bg-blue-200 h-14 rounded-full p-3 rotate-45"/> */}
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-20">
              {" "}
              <Icon
                icon="mdi:shop-outline"
                className="text-blue-600 h-10 w-10 ml-1 -rotate-0 mb-1"
              />
            </div>
            <div>
              <h5 className="font-semibold text-lg">Offline Transactions</h5>
              <p className="text-gray-600">
                we provide tap n pay for PoS even if no internet
              </p>
            </div>
            
          </div>
          
          <div
            className="flex border-[1.6px] p-4 rounded-md gap-x-4"
            style={{ flexGrow: "3" }}
          >
            {/* <PaperAirplaneIcon className="bg-blue-200 h-14 rounded-full p-3 rotate-45"/> */}
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-20">
              {" "}
              <Icon
                icon="ant-design:stock-outlined"
                className="text-blue-600 h-10 w-10"
              />
            </div>
            <div>
              <h5 className="font-semibold text-lg">RFA AI</h5>
              <p className="text-gray-600">
                Risk Factor Analysis AI in house api for your investment recommendations
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg font-medium text-blue-600">And many more!</p>
      </div>
      
      <div
        style={{ flexGrow: "1" }}
        className="bg-blue-200 max-w-6xl rounded-xl px-20 py-0"
      >
        <img src={Group1} alt="" className="scale-100 pb-10" />
      </div>
    </div>
  );
}

export default Features;
