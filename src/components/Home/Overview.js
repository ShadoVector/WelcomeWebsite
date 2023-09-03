import React from "react";
import {
  CreditCardIcon,
  StatusOfflineIcon,
  WifiIcon
} from "@heroicons/react/outline";

function Overview() {
  return (
    <div className="mx-4 sm:mx-20 my-4 sm:my-24 relative bg-blue-600 rounded-xl p-4 sm:p-14 items-center sm:justify-between flex flex-col sm:flex-row text-white">
      <div className="absolute bg-white h-16 w-16 rounded-full blur-2xl -top-6 -left-8 sm:hidden"></div>
      <div className="absolute bg-white h-12 w-12 rounded-full blur-2xl -bottom-8 left-80 sm:hidden"></div>
      <div className="absolute bg-white h-16 w-16 rounded-full blur-2xl -top-10 right-6 sm:right-96"></div>
      <div className="absolute bg-white h-16 w-16 rounded-full blur-2xl top-20 -right-6 sm:hidden"></div>

      <div className="flex max-w-xs mb-8 sm:mb-0">
        <WifiIcon className="h-16 sm:h-8" />
        <div className="px-2 py-4">
          <h5 className="font-semibold text-xl">Tap n Pay</h5>
          <p className="mt-1 font-light">
            Money Sync makes your card payments just with a tap
          </p>
        </div>
      </div>

      <div className="flex max-w-xs mb-8 sm:mb-0">
        <StatusOfflineIcon className="h-16 sm:h-8" />
        <div className="px-2 py-4">
          <h5 className="font-semibold text-xl">Offline Transactions</h5>
          <p className="mt-1 font-light">
            No Internet worries, just tap on PoS, and your transaction will be completed
          </p>
        </div>
      </div>

      <div className="flex max-w-xs">
        <CreditCardIcon className="h-16 sm:h-8" />
        <div className="px-2 py-4">
          <h5 className="font-semibold text-xl">Card Management</h5>
          <p className="mt-1 font-light">
            Unable to track multiple cards? We provide you with extensive analysis of your cards
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
