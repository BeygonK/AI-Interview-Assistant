"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import FormContainer from "./_components/FormContainer";

function Create() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [interviewData, setInterviewData] = useState();

  const onHandleInputChange = (field, value) => {
    setInterviewData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  console.log(interviewData);
  return (
    <div className="mt-5 px-10 md:px-20 lg:px-32">
      <div className="flex gap-5 items-center">
        <ArrowLeft
          className="text-gray-500 cursor-pointer"
          onClick={() => router.back()}
        />
        <h1 className="text-2xl font-bold">Create a new interview</h1>
      </div>
      <Progress value={step * 33.333} className={"my-5"} />
      <FormContainer onHandleInputChange={onHandleInputChange} />
    </div>
  );
}

export default Create;
