"use client";
import { Phone, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function Create() {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Interview Creation Card */}
      <div
        className="flex items-center bg-white border border-gray-200 rounded-lg p-5 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 hover:bg-green-50"
        onClick={() => router.push("/dashboard/create-new-interview")}
      >
        <div className="flex items-center justify-center bg-green-100 rounded-lg p-2 h-12 w-12">
          <VideoIcon className="text-green-600" />
        </div>
        <div className="flex flex-col ml-4">
          <h2 className="text-lg font-bold">Create a new interview</h2>
          <p className="text-gray-500">
            Start a new interview with the AI interviewer.
          </p>
        </div>
      </div>

      {/* Placeholder for the second div */}
      <div className="flex items-center bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200 hover:bg-green-50">
        <div className="flex items-center justify-center bg-green-100 rounded-lg p-2 h-12 w-12">
          <Phone className="text-green-600" />
        </div>
        <div className="flex flex-col ml-4">
          <h2 className="text-lg font-bold">Create Phone Screening Call</h2>
          <p className="text-gray-500">
            Schedule a phone screening call with the AI interviewer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Create;
