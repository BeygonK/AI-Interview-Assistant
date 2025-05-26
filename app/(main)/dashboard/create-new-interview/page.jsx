"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Progress } from "@/components/ui/progress";
import FormContainer from "./_components/FormContainer";
import GenerateQuiz from "./_components/GenerateQuiz";
import { toast } from "sonner";
import { Inter } from "next/font/google";
import InterviewLink from "./_components/InterviewLink";

function Create() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [interviewData, setInterviewData] = useState();
  const [interview_id, setInterviewId] = useState(null);

  const onHandleInputChange = (field, value) => {
    setInterviewData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  //console.log(interviewData);
  const onGoNext = () => {
    if (
      !interviewData?.position ||
      !interviewData?.description ||
      !interviewData?.duration ||
      !interviewData?.interviewType
    ) {
      toast.error(
        "Please fill all the fields before proceeding to the next step"
      );
      return;
    }
    setStep(step + 1);
  };

  const onCreateLink = (interview_id) => {
    //console.log("Creating interview link with ID:", interview_id);
    setInterviewId(interview_id);
    setStep(step + 1);
  };

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
      {step == 1 ? (
        <FormContainer
          onHandleInputChange={onHandleInputChange}
          goNext={() => onGoNext()}
        />
      ) : step == 2 ? (
        <GenerateQuiz
          interviewData={interviewData}
          onCreateLink={onCreateLink}
        />
      ) : step == 3 ? (
        <InterviewLink
          interview_id={interview_id}
          interviewData={interviewData}
        />
      ) : null}
    </div>
  );
}

export default Create;
