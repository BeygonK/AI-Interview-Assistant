import React from "react";

function GenerateQuiz({ interviewData }) {
  // Generate quiz only when the interview data is available
  React.useEffect(() => {
    if (interviewData) {
      handleGenerateQuiz();
    }
  }, [interviewData]);

  const handleGenerateQuiz = () => {
    // Logic to generate quiz based on interview data
    console.log("Generating quiz...");
  };
  return <div>GenerateQuiz</div>;
}

export default GenerateQuiz;
