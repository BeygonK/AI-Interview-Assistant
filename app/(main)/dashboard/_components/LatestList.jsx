"use client";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LatestList() {
  const [interviews, setInterviews] = useState([]);
  //const router = useRouter(); I decided to use Link instead of router.push for better SEO and accessibility.
  return (
    <div className="mt-6">
      <h1 className="font-bold text-2xl">Previous Interviews</h1>
      <div className="mt-2">
        {interviews.length === 0 ? (
          <div className="p-4 flex flex-col mt-5 justify-center items-center">
            <Video className="h-10 w-10 text-primary" />
            <p className="text-gray-500">No interviews yet.</p>
            <Button className={"mt-5 cursor-pointer"}>
              <Link
                href="/dashboard/create-new-interview"
                className="flex items-center space-x-2 cursor-pointer text-white"
              >
                Create New Interview
              </Link>
            </Button>
          </div>
        ) : (
          <ul className="list-disc pl-5">
            {interviews.map((interview, index) => (
              <li key={index} className="text-gray-700">
                {interview}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LatestList;
