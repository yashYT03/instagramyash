import React from "react";
import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import Header from "@/components/Header";

function signIn({ providers }) {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-55  px-14  text-center">
        <img
          className="w-80"
          src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
          alt="icon"
        />
        <p className="font-xs italic"> This App Made By Yash </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIntoProvider(provider.id, {callbackUrl:'/'})}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
