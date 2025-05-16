import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

function FormContainer() {
  return (
    <div className=" bg-white">
      <div className="p-5">
        <h2 className="text-sm my-2">Job Position</h2>
        <Input placeholder="e.g Fullstack Developer" className={""} />
      </div>
      <div className="p-5 my-[-18px]">
        <h2 className="text-sm my-2">Job Description</h2>
        <Textarea className={"h-[150px]"} />
      </div>
      <div className="p-5 my-[-18px]">
        <h2 className="text-sm my-2">Interview Duration</h2>
        <Select>
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
    </div>
  );
}

export default FormContainer;
