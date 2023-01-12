import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const menuItems = ["HOME", "GALLERY", "CONTACT", "ABOUT US"];

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-primaryColor">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed flex gap-4 mr-4 py-2 whitespace-nowrap uppercase text-textColor"
              href="#"
            >
              <img src={require("../../src/assets/react.svg")}></img>
              <span className="text-2xl self-center">Ink</span>
            </a>
            <button
              className="text-textColor cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Menu
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-primaryColor absolute right-[50%] translate-x-[50%] w-[100vw] lg:w-auto top-20 lg:relative lg:right-auto lg:top-auto lg:translate-x-0" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {menuItems.map((item, index) => {
                return (
                  <li key={index} className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-textColor hover:opacity-75"
                      href="#"
                    >
                      <span className="text-xl ml-2">{item}</span>
                    </a>
                  </li>
                );
              })}
              {/* <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-textColor hover:opacity-75"
                  href="#"
                >
                  <span className="text-xl ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-textColor hover:opacity-75"
                  href="#"
                >
                  <span className="text-xl ml-2">Gallery</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-textColor hover:opacity-75"
                  href="#"
                >
                  <span className="text-xl ml-2">Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-textColor hover:opacity-75"
                  href="#"
                >
                  <span className="text-xl ml-2">About Us</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
