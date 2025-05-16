import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { use, useEffect, useState } from "react";
import { InterviewerType } from "@/services/Constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function FormContainer({ onHandleInputChange }) {
  // Handle change for button
  const [data, setData] = useState([]);

  // when  interview type is selected, it will be added to the data array
  useEffect(() => {
    if (data.length > 0) {
      onHandleInputChange("interviewType", data);
    }
  }, [data]);

  // ADD INTERVIEW TYPE TO THE DATA ARRAY
  const handleInterviewType = (item) => {
    const isSelected = data.includes(item);
    if (!isSelected) {
      setData((prev) => [...prev, item]);
    } else {
      setData((prev) => prev.filter((i) => i !== item));
    }
  };

  return (
    <div className=" bg-white">
      <div className="p-5">
        <h2 className="my-2">Job Position</h2>
        <Input
          placeholder="e.g Fullstack Developer"
          className={""}
          onChange={(e) => onHandleInputChange("position", e.target.value)}
        />
      </div>
      <div className="p-5 my-[-18px]">
        <h2 className="my-2">Job Description</h2>
        <Textarea
          className={"h-[150px]"}
          onChange={(e) => onHandleInputChange("description", e.target.value)}
        />
      </div>
      <div className="p-5 my-[-18px]">
        <h2 className=" my-2">Interview Duration</h2>
        <Select
          onValueChange={(value) => onHandleInputChange("duration", value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="30 mins" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30">30 mins</SelectItem>
            <SelectItem value="40">40 mins</SelectItem>
            <SelectItem value="60">60 mins</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="p-5 my-[-18px]">
        <h2>Interview Type</h2>
        <div className="flex gap-2 py-5 mb-[-18px] flex-wrap">
          {InterviewerType.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between mt-[-10px]"
            >
              <div
                className={`flex items-center bg-white-300 border-2 p-1 px-2 rounded-md cursor-pointer hover:bg-gray-100 ${
                  data.includes(item.title)
                    ? "border-green-500 bg-green-100"
                    : "border-gray-300"
                }`}
                onClick={() => handleInterviewType(item.title)}
              >
                <span className="text-2xl">{item.icon}</span>
                <h2 className="text-sm ml-2">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 my-[-18px] flex justify-end ">
        <Button className={"cursor-pointer"}>
          Generate Questions
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

export default FormContainer;
