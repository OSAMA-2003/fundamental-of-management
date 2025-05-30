import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Question as QuestionType } from '../types';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Results from './Results';

interface QuizProps {
  questions: QuestionType[];
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    if (quizCompleted) {
      calculateScore();
    }
  }, [quizCompleted]);

  const handleAnswerSelect = (answer: string | number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);

    // Auto-advance to next question or complete quiz
    if (isLastQuestion) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
  };

  if (quizCompleted) {
    return (
      <Results 
        score={score} 
        totalQuestions={questions.length}
        onRetake={onBack}
        questions={questions}
        userAnswers={userAnswers}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-mobile mx-auto px-4"
    >
      <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
      
      <AnimatePresence mode="wait">
        <Question
          key={currentQuestionIndex}
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
        />
      </AnimatePresence>
      
      <div className="flex justify-start mt-8">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
          className={`nav-button ${
            currentQuestionIndex === 0
              ? "bg-blue-300 text-blue-100 cursor-not-allowed"
              : "nav-button-secondary"
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Previous</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Quiz;