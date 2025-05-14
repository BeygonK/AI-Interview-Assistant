"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import Image from "next/image";
import React from "react";

function Login() {
  // function to handle google login
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("Error logging in with Google:", error.message);
    }
  };

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
          <Button className="mt-4 cursor-pointer" onClick={handleGoogleLogin}>
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
