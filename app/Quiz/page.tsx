"use client";

import React, { useState, useEffect } from "react";

// Type definitions
interface Option {
  option: string;
  index: number;
}

interface Question {
  question: string[];
  options_1: string[];
  options_2: string[];
  options_3: string[];
}

// Utility function to shuffle options
const shuffleArray = (array: Option[]): Option[] => {
  const shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffled;
};

const Quiz: React.FC = () => {
  const questions: Question[] = [
    {
      question: ["q1", "q2", "q3", "q4"],
      options_1: ["a1", "b1", "c1", "d1"],
      options_2: ["a2", "b2", "c2", "d2"],
      options_3: ["a3", "b3", "c3", "d3"],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [shuffledOptions, setShuffledOptions] = useState<Option[]>([]);

  useEffect(() => {
    const currentOptions: Option[] = [
      { option: questions[0].options_1[currentQuestionIndex], index: 0 },
      { option: questions[0].options_2[currentQuestionIndex], index: 1 },
      { option: questions[0].options_3[currentQuestionIndex], index: 2 },
    ];
    setShuffledOptions(shuffleArray(currentOptions));
  }, [currentQuestionIndex]);

  const handleNext = () => {
    if (selectedOption !== null) {
      setUserAnswers((prevAnswers) => [
        ...prevAnswers,
        selectedOption.index === 0, // Only the first option (index 0) is correct
      ]);
      setSelectedOption(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const newAnswers = [...userAnswers];
      newAnswers.pop();
      setUserAnswers(newAnswers);
      setSelectedOption(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
  };

  const calculateScore = (): number => {
    const correctAnswers = userAnswers.filter((answer) => answer).length;
    return (correctAnswers / questions[0].question.length) * 100;
  };

  return (
    <div className="">
      <div className="border-2 border-red-500 m-56 bg-[#ffffffcc]">
        {currentQuestionIndex < questions[0].question.length ? (
          <div className="border-2 border-red-500  ">
            <h2 className="border-2 border-red-500 text-center font-semibold p-5 w-auto text-2xl m-2 rounded bg-gray-100">
              {questions[0].question[currentQuestionIndex]}
            </h2>
            <ul className="border-2 border-red-500 space-y-4 p-5 ">
              {shuffledOptions.map((option, index) => (
                <li
                  className="border-2 border-blue-800 mx-16 p-5 rounded flex gap-4"
                  key={index}
                  onClick={() => handleOptionClick(option)}
                >
                  <div
                    className=" border border-black rounded-full w-3 h-3 mt-[6px]"
                    style={{
                      cursor: "pointer",
                      background: selectedOption === option ? "black" : "white",
                    }}
                  ></div>
                  {option.option}
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-60 mt-5">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="h-12 w-20 bl rounded-[17px] shadow border-blue-800 border-4 text-lime-500 cursor-pointer underline underline-offset-2 font-semibold"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className="h-12 w-20 bl rounded-[17px] shadow border-blue-800 border-4 text-lime-500 cursor-pointer underline underline-offset-2 font-semibold"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="border-2 border-red-500">Quiz Completed</h2>
            <p className="text-xl font-bold">
              Your score is: {calculateScore().toFixed(2)}%
            </p>
            <h3 className="border-2 border-red-500">
              Summary of your answers:
            </h3>
            <ul>
              {questions[0].question.map((question, index) => (
                <li key={index}>
                  <p>{question}</p>
                  <p
                    style={{
                      cursor: "pointer",
                      color: "#15903F",
                    }}
                  >
                    {questions[0].options_1[index]}{" "}
                    {userAnswers[index] && "(Correct)"}
                  </p>
                  <p
                    style={{
                      cursor: "pointer",
                      color: "#EB1F1F",
                    }}
                  >
                    {questions[0].options_2[index]}{" "}
                    {!userAnswers[index] && "(Incorrect)"}
                  </p>
                  <p
                    style={{
                      cursor: "pointer",
                      color: "#EB1F1F",
                    }}
                  >
                    {questions[0].options_3[index]}{" "}
                    {!userAnswers[index] && "(Incorrect)"}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
