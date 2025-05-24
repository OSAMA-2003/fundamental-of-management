import React from 'react';
import { motion } from 'framer-motion';
import { Question as QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  selectedAnswer: string | number | null;
  onAnswerSelect: (answer: string | number) => void;
}

const Question: React.FC<QuestionProps> = ({ question, selectedAnswer, onAnswerSelect }) => {
  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: 20,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-mobile mx-auto bg-white rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-6 leading-relaxed">
        {question.text}
      </h3>

      {question.type === 'truefalse' ? (
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          {['true', 'false'].map((value) => (
            <motion.button
              key={value}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => onAnswerSelect(value)}
              className={`quiz-option ${
                selectedAnswer === value ? 'quiz-option-selected' : 'quiz-option-unselected'
              }`}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3 mt-6">
          {question.options?.map((option, index) => (
            <motion.button
              key={index}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={() => onAnswerSelect(index)}
              className={`quiz-option ${
                selectedAnswer === index ? 'quiz-option-selected' : 'quiz-option-unselected'
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Question;