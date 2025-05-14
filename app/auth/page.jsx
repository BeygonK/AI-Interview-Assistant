import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white rounded-lg ">
        <div>
          <Image src={"/login.svg"} height={200} width={200} alt="logo"></Image>
        </div>
        <div className="flex flex-col items-center justify-center mb-4">
          <h1 className="text-2xl font-bold">
            Welcome to <span className="text-blue-400">AI Interviewer</span>
          </h1>
          <p className="text-gray-600">Please log in to continue</p>
          <Button className="mt-4">
            <a href="/api/auth/signin">Login with Google</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
