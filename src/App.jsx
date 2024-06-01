import React from "react";
import "./App.css";
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoReorderThreeOutline } from "react-icons/io5";
const App = () => {
  const [click, setClick] = React.useState(false);
  return (
    <>
      <div className="text-gray-600 font-body grid md:grid-cols-3">
        <div className="md:col-span-1 md:flex md:justify-end">
          <nav className="text-right">
            <div className="flex justify-between items-center">
              <h1 className="font-bold uppercase p-4 border-b border-gray-100 text-mammoth">
                <a href="/" className="hover:text-gray-900">
                  Food Ninja
                </a>
              </h1>
              <div className="px-4 cursor-pointer md:hidden">
                <IoReorderThreeOutline
                  className="text-4xl text-gray-400"
                  onClick={() => setClick(!click)}
                />
              </div>
            </div>

            <ul
              className={`text-sm mt-6  ${
                click === true ? "block " : "hidden"
              } md:block`}
              id="menu"
            >
              <li className="text-gray-700 font-bold py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end items-center ml-2 border-r-4 border-red-500"
                >
                  <span>
                    <FaHome className="inline-block w-10 mr-2 " />
                    Home
                  </span>
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end items-center ml-2 border-r-4 border-white"
                >
                  <span>
                    <IoIosContact className="inline-block  mr-3" />
                    Contact
                  </span>
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="px-4 flex justify-end ml-2 items-center border-r-4 border-white"
                >
                  <span>
                    <FcAbout className="inline-block mr-5" />
                    About
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="px-16 py-16 bg-gray-100 md:col-span-2">
          <div className="text-red-600 flex justify-center md:justify-end">
            <a
              href="#"
              className="btn text-red-400  border-yellow-500 md:border-2 hover:bg-amber-800 hover:text-white transition ease-out duration-500"
            >
              Log in
            </a>
            <a
              href="#"
              className="ml-2 btn text-red-400 border-yellow-500 md:border-2  hover:bg-amber-800 hover:text-white transition ease-out duration-500"
            >
              Sign up
            </a>
          </div>

          <header>
            <h2 className="text-gray-700 text-2xl font-semibold">Recipes</h2>
            <h3 className="font-semibold text-2xl">For Ninjas</h3>
          </header>

          <div>
            <h4 className="font-bold text-2xl mt-12 pb-2 border-b border-gray-200">
              Latest Recipes
            </h4>

            <div className="mt-8 grid lg:grid-cols-3 gap-10">
              <div className="card hover:shadow-2xl">
                <img
                  src="https://images8.alphacoders.com/103/1032061.jpg"
                  alt="stew"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="m-4">
                  <span>5 Bean Chili Stew</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by Mario
                  </span>
                </div>
                <div className="badge">
                  <span>
                    <FaRegClock className="inline-block mr-1" />
                    25 mins
                  </span>
                </div>
              </div>
              <div className="card hover:shadow-2xl">
                <img
                  src="https://cdn.wallpapersafari.com/97/57/57XcjK.jpg"
                  alt="Pizza"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="m-4">
                  <span>Margeto Pizza </span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by PizzaHut
                  </span>
                </div>
                <div className="badge">
                  <span>
                    <FaRegClock className="inline-block mr-1" />
                    25 mins
                  </span>
                </div>
              </div>
              <div className="card hover:shadow-2xl">
                <img
                  src="https://wallpapercave.com/wp/wp7029404.jpg"
                  alt="stew"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="m-4">
                  <span>Classic Thunduri Burger</span>
                  <span className="block text-gray-500 text-sm">
                    Recipe by McDonalds
                  </span>
                </div>
                <div className="badge">
                  <span>
                    <FaRegClock className="inline-block mr-1" />
                    25 mins
                  </span>
                </div>
              </div>
            </div>

            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
              Most Popular
            </h4>

            <div className="mt-8"></div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-300 text-gray-900 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
              Load more
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
