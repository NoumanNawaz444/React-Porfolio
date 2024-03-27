// import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeBtn from "./ThemeBtn";
import { NavLink } from "react-router-dom";

const navigation = [
  { id : 1 ,  name: "Home", href: "/", current: true },
  { id : 2 , name: "About", href: "/about", current: false },
  { id : 3 ,  name: "PortFolio", href: "/portfolio", current: false },
  { id : 4 ,  name: "Contact", href: "/contact", current: false },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-white dark:bg-gray-800 rounded-md shadow-lg   sm:my-[20px] my-6 border-2 border-black/20 dark:border-white/20 fixed top-0 sm:left-[5%] z-50 sm:w-[calc(90%)] w-[90%] left[5%] "
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white outline-none ">
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 outline-none hover:bg-none"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 outline-none hover:bg-none"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink
                    to=""
                    className="font-bold text-xl text-black dark:text-white"
                  >
                    Nouman N.
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.id}
                        to={item.href}
                        className={({ isActive }) =>
                          `block py-2 pr-4 pl-3 ${
                            isActive
                              ? "bg-white dark:bg-black/20 dark:text-white  shadow-md text-black border-2 border-black/20 dark:border-white/20"
                              : "text-gray-500 hover:shadow-md"
                          }  rounded-md px-3 py-2 text-sm font-medium 0`
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <ThemeBtn />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 rounded-md bg-white dark:bg-gray-800 shadow-lg outline-none duration-400 ">
              {navigation.map((item) => (
                <Disclosure.Button className="flex flex-col w-full text-start outline-none duration-300" key={item.id} >
                  <NavLink
                        key={item.id}
                        to={item.href}
                        className={({ isActive }) =>
                          `block py-2 pr-4 pl-3 ${
                            isActive
                              ? "bg-white dark:bg-black/20 dark:text-white  shadow-md text-black border-2 border-black/20 dark:border-white/20"
                              : "text-gray-500 hover:shadow-md"
                          }  rounded-md px-3 py-2 text-sm font-medium 0 w-full`
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </NavLink>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
