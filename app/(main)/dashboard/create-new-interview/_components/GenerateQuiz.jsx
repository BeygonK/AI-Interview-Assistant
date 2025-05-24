import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import React, { use } from "react";
import { toast } from "sonner";
import QuizList from "./QuizList";
import { supabase } from "@/services/supabaseClient";
import { UserData } from "@/context/UserData";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "@/app/provider";

function GenerateQuiz({ interviewData, onCreateLink }) {
  const [loading, setLoading] = React.useState(true);
  const [quiz, setQuiz] = React.useState(null);
  const [saving, setSaving] = React.useState(false);
  // Get user from hook
  const { user } = UserContext(UserData);

  // Generate quiz only when the interview data is available
  React.useEffect(() => {
    if (interviewData) {
      console.log("Interview Data:", interviewData);
      handleGenerateQuiz();
    }
  }, [interviewData]);

  const handleGenerateQuiz = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/ai-model", {
        ...interviewData,
      });

      console.log("API Response:", res.data.message);

      const responseMessage = res.data.message;

      // Extract the JSON portion using regex
      const jsonMatch = responseMessage.match(/({[\s\S]*})/);

      if (jsonMatch) {
        const FINAL_JSON_STRING = jsonMatch[1];
        console.log("Final JSON String:", FINAL_JSON_STRING);

        try {
          const quizData = JSON.parse(FINAL_JSON_STRING);
          console.log("Parsed JSON:", quizData);
          setQuiz(quizData);
          toast.success("Quiz generated successfully");
          console.log("Quiz Data:", quizData.questions);
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError.message);
          toast.error("Error parsing generated quiz data");
        }
      } else {
        console.error("No JSON found in the response.");
        toast.error("No JSON data found in the response.");
      }

      setLoading(false);
    } catch (error) {
      toast.error("Error generating quiz");
      console.error("Error generating quiz:", error);
      setLoading(false);
    }
  };

  // Function to handle the finish button click
  // Save the quiz in supabase
  const onFinish = async () => {
    // generate unique uuid
    setSaving(true);
    const interview_id = uuidv4();
    console.log("Interview ID:", interview_id);
    const { data, error } = await supabase
      .from("Interview")
      .insert([
        {
          jobPosition: interviewData.position,
          jobDescription: interviewData.description,
          duration: interviewData.duration,
          type: interviewData.interviewType,
          userEmail: user?.email,
          interviewId: interview_id,
          questionList: quiz,
        },
      ])
      .select();
    if (error) {
      console.error("Error inserting data:", error);
      toast.error("Error saving interview data");
    }
    console.log("Inserted data:", data);
    toast.success("Interview data saved successfully");
    setSaving(false);

    onCreateLink(interview_id);
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <Loader2Icon className="animate-spin" />
          <h2>Our AI is generating your response. Hang in there 😊</h2>
        </div>
      ) : quiz ? (
        <QuizList quiz={quiz} />
      ) : (
        <p>No quiz data available.</p>
      )}
      <div className="mt-4 flex justify-end">
        <Button
          className={"cursor-pointer"}
          onClick={() => onFinish()}
          disabled={saving}
        >
          {saving ? <Loader2Icon className="animate-spin" /> : "Finish"}
        </Button>
      </div>
    </div>
  );
}

export default GenerateQuiz;
