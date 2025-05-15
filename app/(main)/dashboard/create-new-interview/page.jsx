"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function Create() {
  const router = useRouter();
  return (
    <div className="mt-5 px-10 md:px-20 lg:px-32">
      <div className="flex gap-5 items-center">
        <ArrowLeft className="text-gray-500" />
        <h1 className="text-2xl font-bold">Create a new interview</h1>
      </div>
    </div>
  );
}

export default Create;
