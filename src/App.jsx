import logo from "./assets/images/logo.png";
import searchIcon from "./assets/images/search-svgrepo-com.svg";
import menuIcon from "./assets/images/menu_white_24dp.svg";
import pauseIcon from "./assets/images/pause_circle_white_48dp.svg";
import cover from "./assets/images/cover.jpg";

import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" bg-black w-full h-screen ">
      <div className="">
        <nav
          className={` flex-col flex ${
            showMenu ? "translate-x-[0px]" : "translate-x-[-379px]"
          }   bg-secondary w-[225px] p-5 font-sourcePro fixed h-screen top-9  transition-transform  duration-500  `}
        >
          <div className="flex items-center m-3   ">
            <img className="rounded-full w-9" src={logo} alt="Groovy-logo" />
            <h2 className=" text-white  ml-1 ">Groovy</h2>
          </div>
          <div className="m-3">
            <h3 className="text-[#61616a]">MENU</h3>
            <div className="flex p-2">
              <p className="text-white">Explore</p>
            </div>
            <div className="flex p-2">
              <p className="text-white">Generes</p>
            </div>
            <div className="flex p-2">
              <p className="text-white">Albums</p>
            </div>
            <div className="flex p-2">
              <p className="text-white">Artists</p>
            </div>
            <div className="flex p-2">
              <p className="text-white">Radio</p>
            </div>
          </div>
          <div className="m-3">
            <h3 className="text-[#61616a]">LIBRARY</h3>
            <div className="flex p-2">
              <p className="text-white">Podcasts</p>
            </div>
            <div className="flex p-2">
              <p className="text-white">Albums</p>
            </div>
            <div className="flex p-2">
              <p className="text-white">Favorites</p>
            </div>
            <div className="flex p-2">
              <p className="text-white">Local</p>
            </div>
          </div>
          <div className="m-3">
            <h3 className="text-[#61616a]">PLAYLIST</h3>
            <div className="flex p-2">
              <p className="text-white">Create New</p>
            </div>
            <div className="flex p-2">
              <p className="text-white">Design Flow</p>
            </div>
            <div className="flex p-2">
              <p className="text-white">Best of 2020</p>
            </div>
          </div>
        </nav>
        <section className="flex flex-col  bg-secondary ">
          <div>
            <div className="fixed left-3">
              <img
                className="absolute left-2 bottom-3  cursor-pointer  "
                src={searchIcon}
                alt="search"
              />
              <input
                placeholder="Type here to search"
                className="bg-black rounded-md p-4 pl-8 outline-none border-none text-white  placeholder-white placeholder-ml-5     "
                id="search"
                type="text"
              />
            </div>
            <div
              onClick={() => setShowMenu((prev) => (prev = !prev))}
              className="fixed right-3 top-3 cursor-pointer   "
            >
              <img src={menuIcon} alt="menu" />
            </div>
          </div>
          <div>
            <div className="bg-chartbg mx-7 my-2">
              <div className="text-white mt-[5rem] mx-6 flex justify-between   items-baseline     ">
                <h2 className="font-bold mt-3 text-2xl">Top Charts</h2>
                <p className="text-lg text-gray-400 ">See more</p>
              </div>
              <div>
                <div className="text-white flex items-center justify-between p-10 pb-0">
                  <div className="flex items-center">
                    <p className="font-bold mr-2 ">1.</p>
                    <div className="flex items-center ">
                      <img
                        src={cover}
                        className="w-[5rem] h-[5rem] rounded-md"
                        alt="cover"
                      />
                      <div className="ml-3">
                        <h4 className="text-xl font-bold">Unholy</h4>
                        <p>sam Smith</p>
                      </div>
                    </div>
                  </div>
                  <img src={pauseIcon} alt="pauseIcon" />
                </div>
              </div>
              <div>
                <div className="text-white flex items-center justify-between p-10">
                  <div className="flex items-center">
                    <p className="font-bold mr-2 ">1.</p>
                    <div className="flex items-center ">
                      <img
                        src={cover}
                        className="w-[5rem] h-[5rem] rounded-md"
                        alt="cover"
                      />
                      <div className="ml-3">
                        <h4 className="text-xl font-bold">Unholy</h4>
                        <p>sam Smith</p>
                      </div>
                    </div>
                  </div>
                  <img src={pauseIcon} alt="pauseIcon" />
                </div>
              </div>
            </div>
            <div className="bg-chartbg mx-7 ">
              <div className="text-white mt-7  mx-6 flex justify-between   items-baseline     ">
                <h2 className="font-bold mt-3 text-2xl">Top Artists</h2>
                <p className="text-lg text-gray-400 ">See more</p>
              </div>
              <div className="flex p-4 my-3">
                <img
                  className="w-[5rem] rounded-full mr-4  "
                  src={cover}
                  alt="cover"
                />
                <img
                  className="w-[5rem] rounded-full mr-4 "
                  src={cover}
                  alt="cover"
                />
                <img
                  className="w-[5rem] rounded-full mr-4 "
                  src={cover}
                  alt="cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex flex-col md:flex-row md:justify-between md:mx-9 md:my-5  ">
              <h1 className="text-white font-bold text-2xl text-center ">
                Discover
              </h1>
              <select
                className="mx-auto py-1 px-6 mt-5  bg-gray-800  text-white md:mx-0 "
                name="genere"
                id="genere"
              >
                <option value="pop">pop</option>
                <option value="elec">elec</option>
              </select>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row   md:flex-wrap  ">
              <div className="bg-chartbg p-5 mt-5 rounded-sm md:mx-5 ">
                <img className="w-[14rem] h-[14rem] " src={cover} alt="cover" />
                <div className="pt-2">
                  <h3 className="text-white">hey dance</h3>
                  <p className="text-gray-400">george</p>
                </div>
              </div>
              <div className="bg-chartbg p-5 mt-5 rounded-sm md:mx-5  ">
                <img className="w-[14rem] h-[14rem] " src={cover} alt="cover" />
                <div className="pt-2">
                  <h3 className="text-white">hey dance</h3>
                  <p className="text-gray-400">george</p>
                </div>
              </div>
              <div className="bg-chartbg p-5 mt-5 rounded-sm md:mx-5  ">
                <img className="w-[14rem] h-[14rem] " src={cover} alt="cover" />
                <div className="pt-2">
                  <h3 className="text-white">hey dance</h3>
                  <p className="text-gray-400">george</p>
                </div>
              </div>
              <div className="bg-chartbg p-5 mt-5 rounded-sm md:mx-5  ">
                <img className="w-[14rem] h-[14rem] " src={cover} alt="cover" />
                <div className="pt-2">
                  <h3 className="text-white">hey dance</h3>
                  <p className="text-gray-400">george</p>
                </div>
              </div>
              <div className="bg-chartbg p-5 mt-5 rounded-sm md:mx-5  ">
                <img className="w-[14rem] h-[14rem] " src={cover} alt="cover" />
                <div className="pt-2">
                  <h3 className="text-white">hey dance</h3>
                  <p className="text-gray-400">george</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
