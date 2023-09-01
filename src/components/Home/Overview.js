import React from "react";
import { CreditCardIcon, EmojiHappyIcon, StatusOfflineIcon, WifiIcon} from "@heroicons/react/outline";

function Overview() {
  return (
    <div className="mx-20 my-24 relative bg-blue-600 rounded-xl p-14 items-center justify-between flex text-white">
      <div className="absolute bg-white h-24 w-24 rounded-full blur-2xl -top-6 -left-8"></div>
      <div className="absolute bg-white h-16 w-16 rounded-full blur-2xl  -bottom-8 left-80"></div>
      <div className="absolute bg-white h-20 w-20 rounded-full blur-2xl -top-10 right-96"></div>
      <div className="absolute bg-white h-20 w-20 rounded-full blur-2xl  top-20 -right-10"></div>
      <div className="flex max-w-xs">
        <WifiIcon className="h-16" />
        <div className="px-2 py-4">
          <h5 className="font-semibold text-xl">Tap n Pay</h5>
          <p className="mt-1 font-light">
            {" "}
            Money Sync make your card payments just with a tap
          </p>
        </div>
      </div>
      <div className="flex max-w-xs">
        <StatusOfflineIcon className="h-16" />
        <div className="px-2 py-4">
          <h5 className="font-semibold text-xl">Offline Transactions</h5>
          <p className="mt-1 font-light">
            {" "}
            No Internet on worries, just tap on PoS your transaction will be completed
          </p>
        </div>
      </div>
      <div className="flex max-w-xs">
        <CreditCardIcon className="h-16" />
        <div className="px-2 py-4">
          <h5 className="font-semibold text-xl">Card Management</h5>
          <p className="mt-1 font-light">
            {" "}
            Unable to track multiple cards, we provide you with extensive analysis on your cards
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
