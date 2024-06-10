import { useState, useEffect } from "react";

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

const Quiz: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const questions: Question[] = [
    {
      question: ["lorem hjdkglah dknflkhhvl ipsum jfljakljpjavf", "q2", "q3", "q4" ,'q5','q6'],
      options_1: ["a1", "b1", "c1", "d1" ,"e1", "f1"],
      options_2: ["a2", "b2", "c2", "d2","e2", "f2"],
      options_3: ["a3", "b3", "c3", "d3", "e3", "f3"],
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
    <div className="absolute top-[-7rem] left-[-281px]">
      <div className="absolute  w-[68rem] h-[39rem] flex items-center justify-center  rounded-2xl  bg-[#A7E92F] z-50 ">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className=" flex items-center justify-center z-50 bg-[#ffffffcc] w-[75%] h-[80%] rounded-2xl shadow-lg ">
          {currentQuestionIndex < questions[0].question.length ? (
            <div className=" w-[87%] h-[82%] ">
              <h2 className=" my-7 text-2xl font-semibold">
                {questions[0].question[currentQuestionIndex]}
              </h2>
              <ul className="space-y-6 ">
                {shuffledOptions.map((option, index) => (
                  <li
                    className=" mx-6 flex gap-4 font-semibold text-xl  p-3 border-2 border-gray-400 rounded-xl"
                    key={index}
                    onClick={() => handleOptionClick(option)}
                  >
                    <div
                      className="  border border-black rounded-full w-3 h-3 mt-[6px] "
                      style={{
                        cursor: "pointer",
                        background:
                          selectedOption === option ? "black" : "white",
                      }}
                    ></div>
                    {option.option}
                  </li>
                ))}
              </ul>

              <div className=" flex justify-around my-5">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="h-12 w-20 bl rounded-[17px] shadow cursor-pointe  bg-red-400 text-white font-semibold"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className="h-12 w-20 bl rounded-[17px] shadow bg-lime-500 text-white cursor-pointer font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="absolute left-[10rem] ">
              <div className="flex ">
                {" "}
                <h2 className=" font-semibold text-xl m-2 underline underline-offset-2 ">
                  Quiz Completed
                </h2>
                <p className="font-semibold text-xl m-2 ">
                  Your score is: {calculateScore().toFixed(2)}%
                </p>
              </div>

              <h3 className=" font-semibold text-xl m-2 ">
                Summary of your answers:
              </h3>
              <ul className="relative  h-96 w-auto  overflow-y-scroll">
                {questions[0].question.map((question, index) => (
                  <li className=" m-7 " key={index}>
                    <p className="font-semibold text-xl  p-3 border-2 border-gray-400 rounded-xl ">{question}</p>
                    <p className=" m-2 font-semibold p-1"
                      style={{
                        cursor: "pointer",
                        color: "#15903F",
                      }}
                    >
                      {questions[0].options_1[index]}{" "}
                      {userAnswers[index] && "(Correct)"}
                    </p>
                    <p className=" m-2 font-semibold p-1"
                      style={{
                        cursor: "pointer",
                        color: "#EB1F1F",
                      }}
                    >
                      {questions[0].options_2[index]}{" "}
                      {!userAnswers[index] && "(Incorrect)"}
                    </p>
                    <p className=" m-2  font-semibold p-1"
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
    </div>
  );
};

export default Quiz;
