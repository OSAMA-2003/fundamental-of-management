export type QuestionType = 'truefalse' | 'multiplechoice';

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[];
  correctAnswer: string | number;
}

export interface ChapterData {
  id: number;
  title: string;
  questions: Question[];
}

export interface QuizState {
  selectedChapter: number | null;
  currentQuestionIndex: number;
  userAnswers: (string | number | null)[];
  quizCompleted: boolean;
  score: number;
}