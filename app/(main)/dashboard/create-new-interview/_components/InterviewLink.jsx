import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Clock1, CopyIcon, List } from "lucide-react";
import Image from "next/image";
import React from "react";

function InterviewLink(interview_id, interviewData) {
  // get interview link
  const GetInterviewLinkUrl = () => {
    const url = process.env.NEXT_PUBLIC_HOST_URL + "/" + interview_id;
    return url;
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-10">
      <Image
        src={"/image.png"}
        alt="check-icon"
        width={100}
        height={100}
        className="bg-gray-100 rounded-full p-2 w-[50px] h-[50px] "
      />
      <h1 className="text-2xl font-bold">Your interview link is ready!</h1>
      <p>
        You can share this link with your candidates to schedule an interview.
      </p>
      <div className="w-full p-7 mt-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mt-2">
          <h2 className="font-bold">Interview Link</h2>
          <h2 className="p-1 px-4 text-primary bg-green-50 rounded-full text-sm font-semibold">
            Valid for 30days
          </h2>
        </div>
        <div className="flex gap-2 items-center mt-3">
          <Input disabled={true} value={GetInterviewLinkUrl()} readOnly />
          <Button className={"cursor-pointer"}>
            <CopyIcon />
            Copy Link
          </Button>
        </div>
        <hr className="my-4" />
        <div className="flex gap-5 items-center">
          <h2 className="flex items-center gap-1 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            {FormData?.duration} 30 minutes
          </h2>
          <h2 className="flex items-center gap-1 text-sm text-gray-500">
            <List className="h-4 w-4" />
            10 Quiz
          </h2>
          <h2 className="flex items-center gap-1 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            {FormData?.duration} Tuesday
          </h2>
        </div>
      </div>
    </div>
  );
}

export default InterviewLink;
