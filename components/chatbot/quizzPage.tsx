import React from 'react';
import Quiz from '../Quiz';

const QuizPage: React.FC = () => {
  const apiUrl = 'http://127.0.0.1:5000/api/questions';

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#A7E92F]">
      <Quiz apiUrl={apiUrl} />
    </div>
  );
};

export default QuizPage;
