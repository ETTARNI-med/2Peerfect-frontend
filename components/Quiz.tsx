import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

interface QuizProps {
  apiUrl: string;
}

const Quiz: React.FC<QuizProps> = ({ apiUrl }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      const formattedQuestions = data.map((q: any) => {
        const options = [q.correctAnswer, ...q.incorrectAnswers].sort(() => Math.random() - 0.5);
        return {
          question: q.question,
          options: options,
          correctAnswerIndex: options.indexOf(q.correctAnswer),
        };
      });
      setQuestions(formattedQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error.toJSON());
      setMessage('Failed to fetch questions');
    }
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    if (currentQuestionIndex >= questions.length - 1) {
      setShowModal(true);
    }
  };

  const handleSkip = () => {
    setSelectedAnswers((prevAnswers) => [...prevAnswers, -1]);
    handleNext();
  };

  const handleOptionClick = (index: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = index;
    setSelectedAnswers(newAnswers);
  };

  const calculateScore = () => {
    const correctAnswers = selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswerIndex);
    return (correctAnswers.length / questions.length) * 100;
  };

  const handleTerminate = () => {
    setShowModal(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
  };

  if (showModal) {
    const score = calculateScore();
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Quiz Completed</h2>
          <p>Grade received: {score.toFixed(2)}%</p>
          <p>Latest Submission Grade: {score.toFixed(2)}%</p>
          <p>To pass: 80% or higher</p>
          <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700" onClick={handleTerminate}>
            Terminate
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-8 bg-gray-200 rounded-lg shadow-md">
      {questions.length > 0 ? (
        <div className="max-w-xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white">
          <h2 className="text-2xl font-bold mb-4">Q. {currentQuestionIndex + 1}</h2>
          <h3 className="text-lg mb-6">{currentQuestion.question}</h3>
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`w-full p-4 bg-gray-100 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 ${
                  selectedAnswers[currentQuestionIndex] === index ? 'bg-blue-100' : ''
                }`}
                onClick={() => handleOptionClick(index)}
                aria-pressed={selectedAnswers[currentQuestionIndex] === index}
                aria-label={`Option ${index + 1}: ${option}`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={handleNext}>
              {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700" onClick={handleSkip}>
              Skip
            </button>
          </div>
        </div>
      ) : (
        <p>{message || 'Loading questions...'}</p>
      )}
    </div>
  );
};

export default Quiz;
