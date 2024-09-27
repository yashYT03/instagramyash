import React from "react";
import Image from "next/image";
// import img from '../public/img1.jpeg';

function Story({ img, username }) {
  return (
    <div>
      <Image
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110  transition-transform duration-200 ease-out"
        src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
        
        alt="Avatar"
        width={128}
        height={128}
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
