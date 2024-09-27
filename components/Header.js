import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

import Image from "next/image";
import code from "../public/ins.png";
import logo from "../public/logo.png";
import imglogo from "../public/avater-removebg-preview.png";
import { signIn,signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";


function Header() {
const { data : session} = useSession();

const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div onClick={() => router.push('/')} className="relative hidden lg:inline-grid   w-24 cursor-pointer">
          <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="instalogo" layout="fill" objectFit="contain" />
        </div>

        <div onClick={() => router.push('/')} className="relative w-10  lg:hidden flex-shrink-0 cursor-pointer">
          <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
        </div>

        {/* middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5  w-5  text-gray-500" />
            </div>
            <input
              className="bg-gray-50  block  w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push("/")} className="navBtn " />
          <MenuIcon className="h-6  md:hidden cursor-pointer " />
          {session ? (
            <>
<div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute  -top-1 -right-2  text-xs w-5  h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white ">
              4
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <Image
          onClick={signOut}
            src={session.user.image}
            alt="My Img"
            className="rounded-full cursor-pointer"  
            width={40} 
            height={40}
            />  
            </>
          ): (
            <button onClick={signIn}>sign In</button>

          )}
          
        </div>
      </div>
    </div>
  );
}

export default Header;
