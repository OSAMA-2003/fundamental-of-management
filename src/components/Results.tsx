import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, RefreshCw, BookOpen } from 'lucide-react';
import { Question } from '../types';

interface ResultsProps {
  score: number;
  totalQuestions: number;
  onRetake: () => void;
  questions: Question[];
  userAnswers: (string | number | null)[];
}

const Results: React.FC<ResultsProps> = ({ 
  score, 
  totalQuestions, 
  onRetake, 
  questions,
  userAnswers 
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const pointsBelow = totalQuestions - score;
  
  let message = "";
  let icon = <Award className="w-12 h-12 text-yellow-400" />;
  
  if (pointsBelow < 5) {
    message = "عااااااااااش 🎉";
    icon = <Award className="w-16 h-16 text-yellow-400" />;
  } else if (pointsBelow >= 5 && pointsBelow <= 10) {
    message = "محتاج تراجع شوية 📝";
    icon = <BookOpen className="w-16 h-16 text-blue-400" />;
  } else {
    message = "ارجع ذاااااااكر 📚";
    icon = <BookOpen className="w-16 h-16 text-red-400" />;
  }
  
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const scorePercentage = Math.round((score / totalQuestions) * 100);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto p-6"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              delay: 0.2 
            }}
            className="inline-block bg-white rounded-full p-4 mb-4"
          >
            {icon}
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-2">{message}</h2>
          <p className="text-blue-100 text-lg">Your final score is:</p>
          <div className="flex items-center justify-center mt-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-bold text-white"
            >
              {score}
            </motion.div>
            <span className="text-xl text-blue-100 mx-2">/</span>
            <span className="text-2xl text-blue-100">{totalQuestions}</span>
            <span className="ml-3 text-xl text-blue-100">({scorePercentage}%)</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRetake}
              className="flex-1 py-3 px-6 bg-blue-500 text-white font-semibold rounded-lg flex items-center justify-center"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Retake Quiz
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowDetails(!showDetails)}
              className="flex-1 py-3 px-6 border-2 border-blue-300 text-blue-700 font-semibold rounded-lg"
            >
              {showDetails ? "Hide Details" : "Show Details"}
            </motion.button>
          </div>
          
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Question Details</h3>
                <div className="space-y-4">
                  {questions.map((question, index) => {
                    const userAnswer = userAnswers[index];
                    const correctAnswer = question.correctAnswer;
                    const isCorrect = userAnswer === correctAnswer;
                    
                    let displayUserAnswer = '';
                    let displayCorrectAnswer = '';
                    
                    if (question.type === 'truefalse') {
                      displayUserAnswer = userAnswer === null ? 'No answer' : String(userAnswer);
                      displayCorrectAnswer = String(correctAnswer);
                    } else {
                      displayUserAnswer = userAnswer === null ? 'No answer' : question.options?.[userAnswer as number] || '';
                      displayCorrectAnswer = question.options?.[correctAnswer as number] || '';
                    }
                    
                    return (
                      <div 
                        key={question.id} 
                        className={`p-4 rounded-lg border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}
                      >
                        <p className="font-medium text-gray-800 mb-2">{index + 1}. {question.text}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-gray-600">Your answer: </span>
                            <span className={isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                              {displayUserAnswer}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Correct answer: </span>
                            <span className="text-green-600 font-medium">{displayCorrectAnswer}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Results;