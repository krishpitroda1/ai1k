import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa6";
function Navbar() {
  const [nav, setNav] = useState(true);
  const handlenav = () => {
    setNav(!nav);
  };
  const [showMenu, setShowMenu] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [showEnterPrise, setShowEnterPrise] = useState(false);
  const [showOperator, setShowOperator] = useState(false);
  const [showCarrier, setShowCarrier] = useState(false);
  const [showTech, setShowTech] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 740) setNav(true);
    });
  });

  return (
    <div className="w-screen top-0 fixed   z-50 ">
   
      {/* <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer=""></script> */}
      <div className="navbar bg shadow-lg w-full md:px-10 px-7 md:flex justify-between text-black">
      <div className="logo p-5">
          {/* Your logo component or image goes here */}
          <Link to="/">
            <img src={Logo} alt="Logo"  />
          </Link>
        </div>

        <div className="hidden md:flex justify-end gap-10 w-full">
          {/* Your content goes here */}
          <div className="p-5 text-black justify-around hidden md:flex">
          <div className="dropdown-link py-7 px-3 hidden md:block">
            <p className="flex droptext relative cursor-pointer font-semibold text-lg">
              Overview
              <svg
                className="dropdown-icon flex-shrink-0 ms-2 w-4 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <div className="dropdown top-9 hidden absolute hover:block rounded-lg p-8 w-12 text-md shadow-xl bg-white">
                <ul className="">
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/About">About us</Link>
                  </li> 
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/AI1k">Ai1K Concept</Link>
                  </li>
                  <li className="hover:text-sky-600 hover:font-bold  py-2 block">
                    <Link to="/People">People Behind</Link>
                  </li>
            
                </ul>
              </div>
            </p>
          </div>

        </div>
        <div className="p-5 text-black justify-around hidden md:flex">
          <div className="dropdown-link py-7 px-3 hidden md:block">
            <p className="flex droptext relative cursor-pointer font-semibold text-lg">
              Our Activites
              <svg
                className="dropdown-icon flex-shrink-0 ms-2 w-4 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <div className="dropdown top-9 hidden absolute hover:block rounded-lg p-8 w-12 text-md shadow-xl bg-white">
                <ul className="">
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Consulting">Consulting</Link>
                  </li> 
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Vas">VAS</Link>
                  </li>
                  <li className="hover:text-sky-600 hover:font-bold  py-2 block">
                    <Link to="/Mentoring">Mentoring</Link>
                  </li>
                 </ul>
              </div>
            </p>
          </div>

        </div>
      
        <div className="p-5 text-black justify-around hidden md:flex">
          <div className="dropdown-link py-7 px-3 hidden md:block">
            <p className="flex droptext relative cursor-pointer font-semibold text-lg">
              For
              <svg
                className="dropdown-icon flex-shrink-0 ms-2 w-4 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <div className="dropdown top-9 hidden absolute hover:block rounded-lg p-8 w-12 text-md shadow-xl bg-white">
                <ul className="">
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Students">Students</Link>
                  </li> 
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Tpo">TPO</Link>
                  </li>
                  <li className="hover:text-sky-600 hover:font-bold  py-2 block">
                    <Link to="/Collages">Collages</Link>
                  </li>
                </ul>
              </div>
            </p>
          </div>

        </div>  
         
        <div className="p-5 text-black justify-around hidden md:flex">
          <div className="dropdown-link py-7 px-3 hidden md:block">
            <p className="flex droptext relative cursor-pointer font-semibold text-lg">
              Fun & CSR
              <svg
                className="dropdown-icon flex-shrink-0 ms-2 w-4 h-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <div className="dropdown top-9 hidden absolute hover:block rounded-lg p-8 w-12 text-md shadow-xl bg-white">
                <ul className="">
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Csr">CSR in our DNA</Link>
                  </li> 
                  <li className="hover:text-sky-600 hover:font-bold py-2 block ">
                    <Link to="/Fun">Fun Friday</Link>
                  </li>
                  <li className="hover:text-sky-600 hover:font-bold  py-2 block">
                    <Link to="/Health">Health Month</Link>
                  </li>
                </ul>
              </div>
            </p>
          </div>

        </div>
       
       <Link to="/Contacts" className=" py-7 lg:py-12 hidden md:block">
         <p className="font-semibold text-lg">Contact Us</p>
       </Link>
      
      {/* <Link to="https://dashboard.hellotubelight.com/sign-in" className=" py-7 hidden md:block">
        
        <p className="font-semibold text-lg">Login</p>
        </Link> */}
        </div>
        <div
          onClick={handlenav}
          className="block hover:cursor-pointer md:hidden"
        >
          {!nav ? <></> : <AiOutlineMenu size={20} />}
        </div>
      </div>   {/* -----------------------------------------------------------------mobile view ----------------------------------------------------------------------------- */}

      {/* <div className={!nav ? 'fixed left-0 top-0 w-[50%] border-r h-full border-r-gray-900  ease-in-out duration-500' : "fixed left-[-150%]"}>*/}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[70%] z-10 border-r h-full  overflow-y-scroll border-r-gray-900 n1  ease-in-out duration-500 "
            : "fixed left-[-150%]"
        }
      >
        <div className="flex flex-row justify-between  items-center pe-5  ">
          <Link to="/" onClick={() => setNav(true)}>
            <img
              src={Logo}
              alt="Arrowtelelink"
              className="lg:cursor-pointer h-24 m-4 w-24"
            />
          </Link>
          <div
            onClick={handlenav}
            className=" hover:cursor-pointer block lg:hidden "
          >
            <AiOutlineClose size={20} />
          </div>
        </div>
        <ul className="lg:flex pt-24items-center gap-8 p-2 font-[Poppins] ">
        <li className="border-b  border-gray-600">
        <div className="dropdown-link py-7 md:block hover:text-orange-400">
              <p
                className="flex droptext relative cursor-pointer"
                onClick={() => setShowRes(!showRes)}
              >
                Overview
                <svg
                  className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </p>
            </div>
            <div className={`relative ml-10 ${showRes ? "block" : "hidden"}`}>
            <li className="border-b  border-gray-600">
              <Link
                to="/Carrers"
                className="py-7  inline-block hover:text-orange-600"
              >
                About us
              </Link>
            </li>
            <li className="border-b  border-gray-600">
              <Link
                to="/AI1k"
                className="py-7  inline-block hover:text-orange-600"
              >
                AI1k Concept
              </Link>
            </li>
     
              <Link
                to="/People"
                className="py-7 inline-block hover:text-orange-600"
              >
                People Behind
              </Link>
           </div>
</li>
          <li className="border-b  border-gray-600 py-7">
            <Link
              className="dropdown-link py-7 md:block hover:text-orange-400" to='/Services'
              
              onClick={() => setShowMenu(!showMenu)}
            >
              <p className="flex droptext relative">
                Services
                <svg
                  className="dropdown-icon flex-shrink-0 ms-2 w-4 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </p>
            </Link>
          </li>
      <li className="border-b  border-gray-600">
            <Link
              to="/Contacts"
              className="py-7 inline-block hover:text-orange-600"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
    //  </div>
  );
}

export default Navbar;
