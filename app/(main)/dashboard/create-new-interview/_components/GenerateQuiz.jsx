import axios from "axios";
import { Loader2Icon } from "lucide-react";
import React from "react";
import { toast } from "sonner";

function GenerateQuiz({ interviewData }) {
  const [loading, setLoading] = React.useState(true);
  const [quiz, setQuiz] = React.useState(null);
  // Generate quiz only when the interview data is available
  React.useEffect(() => {
    if (interviewData) {
      handleGenerateQuiz();
    }
  }, [interviewData]);

  const handleGenerateQuiz = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/ai-model", {
        ...interviewData,
      });

      console.log(res.data.message);

      const responseMessage = res.data.message;

      // Extract the JSON portion using regex
      const jsonMatch = responseMessage.match(/({[\s\S]*})/);

      if (jsonMatch) {
        const FINAL_JSON_STRING = jsonMatch[1];
        console.log("Final JSON String:", FINAL_JSON_STRING);

        try {
          const quizData = JSON.parse(FINAL_JSON_STRING);
          console.log("Parsed JSON:", quizData);
          // Handle the parsed JSON data as needed
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
  return (
    <div className="bg-green-200 p-4 rounded-lg border border-green-300 flex items-center gap-5">
      {loading && (
        <div className="flex items-center justify-center gap-2">
          <Loader2Icon className="animate-spin" />
          <h2> Our AI is generating your response. Hang in there 😊</h2>
        </div>
      )}
    </div>
  );
}

export default GenerateQuiz;
