import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChapterSelection from './components/ChapterSelection';
import Quiz from './components/Quiz';
import { chapters, getAllQuestions, getChapterQuestions } from './data/quizData';
import { Question } from './types';

function App() {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  const handleChapterSelect = (chapterId: number | null) => {
    setSelectedChapter(chapterId);
    
    // Get questions based on chapter selection
    const questions = chapterId === null 
      ? getAllQuestions() 
      : getChapterQuestions(chapterId);
      
    setQuizQuestions(questions);
    setQuizStarted(true);
  };

  const handleBackToChapters = () => {
    setQuizStarted(false);
    setSelectedChapter(null);
  };

  const getChapterTitle = () => {
    if (selectedChapter === null) {
      return "All Chapters";
    }
    const chapter = chapters.find(c => c.id === selectedChapter);
    return chapter ? chapter.title : "";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 text-gray-800 py-8 relative">
      <div className="container mx-auto px-4 pb-16">
        <AnimatePresence mode="wait">
          {!quizStarted ? (
            <motion.div
              key="chapter-selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChapterSelection onChapterSelect={handleChapterSelect} />
            </motion.div>
          ) : (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBackToChapters}
                  className="text-blue-100 hover:text-white mb-2 inline-flex items-center"
                >
                  ← Back to Chapters
                </motion.button>
                <h2 className="text-2xl font-bold text-white">{getChapterTitle()}</h2>
              </div>
              <Quiz questions={quizQuestions} onBack={handleBackToChapters} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 py-4 text-center bg-blue-900 bg-opacity-50 backdrop-blur-sm">
        <a 
          href="https://osama-ahmd-portfolio.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-100 hover:text-white transition-colors duration-200"
        >
                    Made By ENG:<span className=' font-bold font-sans underline '>OSAMA</span>

        </a>
      </footer>
    </div>
  );
}

export default App;
