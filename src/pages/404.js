import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center flex-col items-center my-5 select-none">
      <Image
        src="/assets/404 Error Page.gif"
        alt="notfound"
        width={600}
        height={600}
      />
      <button
        onClick={() => router.push("/")}
        className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white animate-bounce"
      >
        back to home page
      </button>
    </div>
  );
};

export default NotFound;
