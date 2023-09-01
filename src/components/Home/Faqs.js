import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

function Faqs() {
  return (
    <div className="mx-20 my-9">
      <h2 className="text-5xl font-semibold my-3 ml-1">FAQs</h2>
      <div>
        <div className="w-full max-w-3xl p-2  bg-white rounded-2xl">
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
                  moneysync is a social payment app, our goals is to make a payment
                  arounds your social environment more fast, simple, and
                  interactive. Our aim is to make moneysync a payment social app
                  that doesnt feel like a ordinary transaction application, but
                  more like a lifestyle which everyone use for their life.
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
                  We provide many features to help you do any kind of
                  transaction, start with a simple things like send a money to a
                  complex like managing and doing transaction for a groups of
                  people. We also focusing to build an environment in our
                  application so people that used moneysync doesnt feel like using
                  a money related application but rather like a social media, so
                  hopefully it can boost our user experience and they can more
                  focus to what matters.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-700 bg-blue-200 rounded-lg hover:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span className="text-lg">How it works</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-blue-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                  moneysync use an social media feels approach where user can add
                  their friends and then do any transaction in moneysync
                  application. But you can also send or request money to someone
                  without need to add them with scanning their qr code.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-700 bg-blue-200 rounded-lg hover:bg-blue-300 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span className="text-lg">How to change my pin</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-blue-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                  You can change your confirmation pin through settings in your
                  profile, select <b>Privacy</b> and then select{" "}
                  <b>Change my pin</b>
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
