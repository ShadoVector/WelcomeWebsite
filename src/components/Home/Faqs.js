import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

function Faqs() {
  return (
    <div className="mx-20 my-9">
      <h2 className="text-5xl font-semibold my-3 ml-1">FAQs</h2>
      <div>
        <div className="w-full max-w p-2  bg-white rounded-2xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-700 bg-blue-200 rounded-lg hover:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span className="text-lg">What is moneysync?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-blue-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                  MoneySync is a Payment and investment Application here we asure users
                  to secure and effortless payment to merchant and other users
                  with our tap n pay option we can ensure your payments very secure with Biometric Authentication
                  with out RFA AI we will analysis the users responses we will provide them recommendations
                  on with to buy and sell.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-700 bg-blue-200 rounded-lg hover:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span className="text-lg">Why moneysync?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-blue-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                  We provide many features to help you for secure transactions than 
                  any other providers, as we use Biometric Authentication
                  as we do tap and pay there wont be any middle in the man attacks
                  also with RFA AI we provide 80-90% accurate results.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
