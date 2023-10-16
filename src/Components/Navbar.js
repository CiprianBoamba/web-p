import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import AnimatedIcon from '../Components/Animation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = React.createRef();

  return (
    <div>
      <nav className="bg-slate-200 dark:bg-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>

            <div className="flex items-center justify-end space-x-4">
              {/* Links for larger screens */}
              <div className="hidden md:flex space-x-4">
                <Link
                  to="/"
                  className="relative text-slate-900 dark:text-white  overflow-hidden group px-3 py-2  text-sm font-medium"
                >
                  Home
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 dark:bg-purple-600 transform scale-x-0 transition-transform origin-center group-hover:scale-x-100"></span>
                </Link>
                <Link
                  to="/about"
                  className="text-slate-900 dark:text-white relative overflow-hidden group px-3 py-2  text-sm font-medium"
                >
                  About
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 dark:bg-purple-600 transform scale-x-0 transition-transform origin-center group-hover:scale-x-100"></span>
                </Link>
                <Link
                  to="/projects"
                  className="relative text-slate-900 dark:text-white  px-3 py-2  text-sm font-medium  overflow-hidden group"
                >
                  Projects
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 dark:bg-purple-600 transform scale-x-0 transition-transform origin-center group-hover:scale-x-100"></span>
                </Link>
              </div>

              <AnimatedIcon />

              {/* Mobile menu button */}
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-500 inline-flex items-center justify-center p-2 rounded-md text-white
                   dark:bg-gray-900 dark:text-purple-600 
                hover:bg-gray-600 focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={divRef}
                className=" flex flex-col justify-center items-center flex-nowrap px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  to="/"
                  className="text-slate-900 dark:text-white relative px-3 py-2  text-sm font-medium overflow-hidden group"
                >
                  Home
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 dark:bg-purple-600 transform scale-x-0 transition-transform origin-center group-hover:scale-x-100"></span>
                </Link>
                <Link
                  to="/about"
                  className="text-slate-900 dark:text-white relative px-3 py-2  text-sm font-medium overflow-hidden group"
                >
                  About
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 dark:bg-purple-600 transform scale-x-0 transition-transform origin-center group-hover:scale-x-100"></span>
                </Link>
                <Link
                  to="/projects"
                  className="text-slate-900 dark:text-white relative px-3 py-2  text-sm font-medium overflow-hidden group"
                >
                  Projects
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 dark:bg-purple-600 transform scale-x-0 transition-transform origin-center group-hover:scale-x-100"></span>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
