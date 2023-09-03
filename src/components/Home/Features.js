import { Icon } from "@iconify/react";
import Group1 from "../pictures/moneysync-mockup.svg";

function Features() {
  return (
    <div className="mx-4 sm:mx-20 my-10 sm:my-40 flex flex-wrap justify-between items-center">
      <div className="w-full sm:w-2/3 space-y-6">
        <h2 className="font-semibold text-3xl sm:text-5xl my-4">Our Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="border-[1.6px] p-4 rounded-md flex space-x-4">
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-16">
              <Icon icon="mdi:shop-outline" className="text-blue-600 h-10 w-10" />
            </div>
            <div>
              <h5 className="font-semibold text-lg">Instant Merchant Transfer</h5>
              <p className="text-gray-600">
                No waiting time to receive the money; just tap, and the money will be in your account.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="border-[1.6px] p-4 rounded-md flex space-x-4">
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-16">
              <Icon icon="ic:round-add-card" className="text-blue-600 h-10 w-10" />
            </div>
            <div>
              <h5 className="font-semibold text-lg">Card Management and Analysis</h5>
              <p className="text-gray-600">
                Provide detailed analysis of your card payments and history.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Feature 3 */}
          <div className="border-[1.6px] p-4 rounded-md flex space-x-4">
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-16">
              <Icon icon="ri:p2p-fill" className="text-blue-600 h-10 w-10" />
            </div>
            <div>
              <h5 className="font-semibold text-lg">Peer to Peer</h5>
              <p className="text-gray-600">
                To boost our user experience, we make it more interactive and fun.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="border-[1.6px] p-4 rounded-md flex space-x-4">
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-16">
              <Icon icon="material-symbols:tap-and-play" className="text-blue-600 h-10 w-10" />
            </div>
            <div>
              <h5 className="font-semibold text-lg">Tap and Pay</h5>
              <p className="text-gray-600">
                Just tap with biometric authentication; the payment will be completed.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Feature 5 */}
          <div className="border-[1.6px] p-4 rounded-md flex space-x-4">
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-16">
              <Icon icon="mdi:shop-outline" className="text-blue-600 h-10 w-10" />
            </div>
            <div>
              <h5 className="font-semibold text-lg">Offline Transactions</h5>
              <p className="text-gray-600">
                We provide tap n pay for PoS even if there is no internet.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="border-[1.6px] p-4 rounded-md flex space-x-4">
            <div className="bg-blue-200 rounded-full p-2 flex justify-center items-center h-16 w-16">
              <Icon icon="ant-design:stock-outlined" className="text-blue-600 h-10 w-10" />
            </div>
            <div>
              <h5 className="font-semibold text-lg">RFA AI</h5>
              <p className="text-gray-600">
                Risk Factor Analysis AI in-house API for your investment recommendations.
              </p>
            </div>
          </div>
        </div>

        <p className="text-lg font-medium text-blue-600 mt-6">And many more!</p>
      </div>

      <div className="w-full sm:w-1/3 bg-blue-200 rounded-xl px-4 sm:px-20 py-0 mt-6">
        <img src={Group1} alt="" className="w-full scale-100 pb-10" />
      </div>
    </div>
  );
}

export default Features;
