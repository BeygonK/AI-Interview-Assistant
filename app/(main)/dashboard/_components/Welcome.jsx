"use client";
import { UserData } from "@/context/UserData";
import Image from "next/image";
import React, { useContext } from "react";

function Welcome() {
  // get user from userContext
  const { user } = useContext(UserData);
  console.log("user", user);
  if (user === undefined) {
    return <h2>Loading user data...</h2>;
  }

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-sm">
      <div className="gap-2 p-4">
        <h2 className="text-lg font-bold ">Welcome back, {user?.name}</h2>
        <p className="text-gray-500">
          You can start a new interview or check previous interviews.
        </p>
      </div>
      <Image
        src={user?.picture}
        width={50}
        height={50}
        alt="profile"
        className="rounded-full mr-4"
      />
    </div>
  );
}

export default Welcome;
