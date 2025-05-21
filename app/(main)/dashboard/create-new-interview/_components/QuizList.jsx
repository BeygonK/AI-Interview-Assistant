import React from "react";

function QuizList({ quiz }) {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {quiz && quiz.questions ? (
          <div>
            <h2 className="text-lg font-semibold">Generated Quiz</h2>
            <p className="text-sm text-gray-600">{quiz.description}</p>
            {quiz.questions.map((question, index) => (
              <div
                key={index}
                className="mt-4 p-2 border border-gray-300 rounded"
              >
                <h3 className="font-semibold">{`Question ${index + 1}: ${
                  question.question
                }`}</h3>
                <p className="text-sm text-primary">{question.type}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default QuizList;
