import React, { useContext } from "react";
import UserContext from "../Context/UserContext/UserContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {

  const router = useRouter();
  const data = useContext(UserContext)
  console.log("Data is : ", data);

  const handleLogin = () => {
  
    {data.setIsLogin(Login => !Login)}
    {data.IsLogin ? router.push("/") : router.push("/Login")}
    
  }

  return (
    <>
      <header className="  text-gray-600 body-font sticky top-0 z-30 bg-white">
        <div className=" flex flex-col  items-center lg:ml-6 lg:flex-row  lg:gap-10 xl:flex-row xl:justify-around  ">
          <div className="  text-center md:flex  items-center text-gray-900  md:items-center">
            <span className=" text-xl font-bold lg:justify-self-start">
              <Link href="/">MEGA STORE</Link>
            </span>
          </div>

          <nav className="sm:pt-4 flex flex-col items-center justify-center md:w-full md:pt-4 md:flex-row md:items-center md:justify-evenly lg:flex-row lg:items-center lg:flex-1 lg:space-x-6 xl:flex-row xl:items-center xl:space-x-14 ">
            <Link href="/">
              <a className=" hover:text-gray-900 text-lg md:text-xl xl:text-xl">
                Home
              </a>
            </Link>

            <Link href="/Products">
              <a className=" hover:text-gray-900 text-lg xl:text-xl">
                Products
              </a>
            </Link>

            <Link href="/About">
              <a className=" hover:text-gray-900 text-lg xl:text-xl">
                About Us
              </a>
            </Link>
            <Link href="/Contact">
              <a className=" hover:text-gray-900 text-lg xl:text-xl">
                Contact Us
              </a>
            </Link>
          </nav>

          <div className="buttons  flex items-center  md:w-full  md:justify-evenly lg:gap-8">
            <IoMdCart fontSize={30} className="hidden" />
            {/* below button will be inline-flex */}
            <button
              type="button"
              className="  hidden relative items-center p-3 text-sm font-medium text-center text-white rounded-lg   focus:outline-none"
            >
              <div className="flex absolute -top-4 right-3 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
                1
              </div>
            </button>

            <button
              type="button"
              onClick={() => router.push("/SignUp")}
              className=" m-4  text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-3.5 py-2.5 text-center  italic"
            >
              SignUp
            </button>
            
            <button
              type="button"
              onClick={handleLogin}
              className= {data.IsLogin ? "m-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4  py-2.5 text-center  italic" : "m-4  text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center  italic"}
            >
              {data.IsLogin ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
