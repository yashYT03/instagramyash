import React, { useState } from "react";
import Image from "next/image";

import {
  BooksmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { BookmarkIcon as Book } from "@heroicons/react/solid";
import { img1 } from "../public/IIT.jpg";

// import imglogo from "../public/avater-removebg-preview.png";

function Post({ id, username, userImg, img, caption, uservideo, video }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <Image
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="Avatar"
          width={128}
          height={128}
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* img */}
      <img
        src="https://iitr.ac.in/Institute/Estate%20Office/assets/67175aa0ed7362d6fce7c6cc8e2b1aeba7f279879324061d66225b778d1a2d9a_IITWebsite02.jpg"
        className="object-cover  w-full "
        alt=" "
      />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        {caption}
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <img
        src="https://w0.peakpx.com/wallpaper/752/459/HD-wallpaper-welcome-iit-delhi-iit-delhi.jpg"
        className="object-cover  w-full "
        alt=" "
      />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/giJvN0wd0NM?si=Lf_Mr-AvuB9YHS6N"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <img
        src="https://media.licdn.com/dms/image/v2/C5622AQFNm2QHOXZQzQ/feedshare-shrink_800/feedshare-shrink_800/0/1658782189673?e=2147483647&v=beta&t=cL2ZDN7l2cGPdkWLQicGymHeEcA8_ibcef89eXGxBOs"
        className="object-cover  w-full "
        alt=" "
      />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/Vf3HBT0Fv1I?si=xLxEmEpOwDEFGuu5"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/OPyRiv64p5I?si=HcUUTfrSTRe82qRD"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/c5ppXwhRVLk?si=uK7Ol3y8MnstaGmb"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
    No one can defeat me, unless I got defeated by myself.
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <img
        src="https://wallpapers.com/images/hd/night-aesthetic-empty-road-ptke15xdbm9pgo5j.jpg"
        className="object-cover  w-full "
        alt=" "
      />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/cwEuuGMtNz4?si=v-TbXjfcHt81Hxls"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/lkoZisDe_HY?si=fjm-3pYqFMvQHyHJ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/iOZjILeRRRo?si=LQGEhMso-EejcLjd"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/ELYvF7fg4qk?si=M7a-yCVcN-SJQgP-"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <img
        src="https://images.wallpaperscraft.ru/image/single/stolby_provoda_noch_149010_1920x1080.jpg"
        className="object-cover  w-full "
        alt=" "
      />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/v3pyNr5m8fA?si=wFmPWTol-cP3w3XQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/5nlpMphzvtk?si=Zj6niToGSHMaKL80"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/2fXJ_NnjgxY?si=XGFBJDIKRmO8Uiem"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <img
        src="https://i.pinimg.com/236x/c6/df/3b/c6df3b3bf0d80d83e90751bfa3a7316f.jpg"
        className="object-cover  w-full "
        alt=" "
      />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/4tpWz9Y8lOE?si=n9S-EKZ6Cy0YBhgH"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/8g51kJs2DXc?si=hqRcsCpCwFvC_VP9"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/Xj9huWoiuro?si=sq5wr3JwMWOdVaaU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/s1W1raDXFhs?si=5XaHbC6tYMONpV6w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <img
        src="https://qph.cf2.quoracdn.net/main-qimg-65fc8119e20f8761a7a0444f95cd4ee9-lq"
        className="object-cover  w-full "
        alt=" "
      />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/dfuumU0NmrM?si=gw60Zc9PstFzzkri"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/b-eA5QDF5sk?si=YCRwVjrcvMocF5ym"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/xcXlXOL6JFE?si=SySFXv5SCnCC1lww"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/NgYpNnjsAGw?si=CJBe-rvZijHMj8d8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/IUR3Io3Afyg?si=3t_oMnDXk2D8oj1k"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>

      <iframe
        className="object-cover  w-full "
        height="429"
        src="https://www.youtube.com/embed/IQQpvH84UR4?si=1zSPal9uWI7d1n5n"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <Book className="btn" />
      </div>

      <p className="p-5 truncate">
        <span className="font-bold mr-1"> {username} </span>
        Anonymous
      </p>

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
}

export default Post;
