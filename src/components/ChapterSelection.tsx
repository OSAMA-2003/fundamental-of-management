import React from 'react';
import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import { chapters } from '../data/quizData';

interface ChapterSelectionProps {
  onChapterSelect: (chapterId: number | null) => void;
}

const ChapterSelection: React.FC<ChapterSelectionProps> = ({ onChapterSelect }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 400
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div
      className="w-full max-w-mobile mx-auto px-4 sm:max-w-2xl md:max-w-4xl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 px-4 gap md:pt-10 "
      >
        <h1 className=" text-2xl md:text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          Management Fundamentals Revision
        </h1>
        
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {chapters.map((chapter) => (
          <motion.button
            key={chapter.id}
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-5 text-left transition-shadow duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            onClick={() => onChapterSelect(chapter.id)}
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Book className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className=" text-sm md:text-xl font-semibold text-blue-900 leading-tight">
                  {chapter.title}
                </h2>
                <p className="text-blue-700 mt-1">
                  {chapter.questions.length} Questions
                </p>
              </div>
            </div>
          </motion.button>
        ))}

        <motion.button
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl p-5 md:col-span-2  text-left transition-shadow duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          onClick={() => onChapterSelect(null)}
        >
          <div className="flex items-center justify-center gap-3">
            <Book className="w-6 h-6" />
            <h2 className="text-md md:text-xl font-semibold">Take Full Quiz (All Chapters)</h2>
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ChapterSelection;