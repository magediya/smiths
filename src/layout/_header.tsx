 /* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import { useRouter } from "next/router";

const LayoutHeader = () => {

  const router = useRouter();


  useEffect(() => {

  }, [])

  const [headerMenu, setHeaderMenu] = useState(true); // Initialize with false, as menu is initially closed

  const toggleHeaderMenu = () => {
    setHeaderMenu(!headerMenu); // Toggle the state of headerMenu
  };

  return (
      <header className="home-header relative w-full py-4 md:py-5">
        <div className="container">
          <div className="hidden md:flex flex-wrap justify-end">
              <Link  
                className="hover:text-ultramarine-500 md:mr-2"
                href="/">Login</Link>
              <Link
                className="hover:text-ultramarine-500 "
                href="/">Register</Link>
          </div>
          <div className="flex flex-wrap justify-between items-center md:pt-4">
            <div className="relative z-50">
              <Link href="/">
                <Image src={'/assets/images/logo.svg'} width={200} height={29} alt="" />
              </Link>
            </div>
      
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
              <div className="flex flex-wrap items-center justify-between">
                <button onClick={toggleHeaderMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`${headerMenu ? 'hidden' : 'block' } w-full md:block md:w-auto absolute md:relative top-full md:top-0 left-0`} id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:bg-white">
                    <li className="py-2 md:py-0"><a href="#" className="block text-black hover:text-ultramarine-500" aria-current="page">Products</a></li>
                    <li className="py-2 md:py-0"><a href="#" className="block text-black hover:text-ultramarine-500" aria-current="page">Markets</a></li>
                    <li className="py-2 md:py-0"><a href="#" className="block text-black hover:text-ultramarine-500" aria-current="page">News Event</a></li>
                    <li className="py-2 md:py-0"><a href="#" className="block text-black hover:text-ultramarine-500" aria-current="page">Library</a></li>
                    <li className="py-2 md:py-0"><a href="#" className="block text-black hover:text-ultramarine-500" aria-current="page">Compnay</a></li>
                    <li className="py-2 md:py-0"><a href="#" className="block text-black hover:text-ultramarine-500" aria-current="page">Careers</a></li>
                    <li className="py-2 md:py-0"><a href="#" className="block text-black hover:text-ultramarine-500" aria-current="page">Contact</a></li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className="hidden md:block">
              <select name="" id="" className='bg-transparent px-3'>
                <option value="">Tool</option>
                <option value="">Tool</option>
                <option value="">Tool</option>
              </select>
            </div>
          </div>
        </div>
      </header>
  );
};

export default LayoutHeader;
