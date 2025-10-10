import { create } from "zustand";
import { questions } from "../data/questions";
import { roles } from "../data/roles";

const getInitialState = () => {
  const initialScores = {};
  for (const role in roles) {
    initialScores[role] = 0;
  }
  return {
    scores: initialScores,
    currentQ: 0,
    answers: {},
    finished: false,
  };
};

export const useQuizStore = create((set, get) => ({
  ...getInitialState(),
  handleAnswer: (points, optionIndex) => {
    const { currentQ, answers } = get();
    const newAnswers = { ...answers, [currentQ]: optionIndex };
    const newScores = getInitialState().scores;
    questions.forEach((question, index) => {
      const answeredOptionIndex = newAnswers[index];
      if (answeredOptionIndex !== undefined) {
        const answerPoints = question.options[answeredOptionIndex].points;
        for (const role in answerPoints) {
          if (newScores.hasOwnProperty(role)) {
            newScores[role] += answerPoints[role];
          }
        }
      }
    });

    set({ answers: newAnswers, scores: newScores });
    if (get().currentQ < questions.length - 1) {
      set((state) => ({ currentQ: state.currentQ + 1 }));
    } else {
      set({ finished: true });
    }
  },

  restart: () => {
    set(getInitialState());
  },

  getWinningRole: () => {
    const { scores, answers } = get();
    if (Object.keys(answers).length === 0) {
      return Object.keys(roles)[0];
    }
    return Object.entries(scores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  },

  getResult: () => {
    const role = get().getWinningRole();
    return roles[role]?.title || "You are a Developer!";
  },

  getMessage: () => {
    const role = get().getWinningRole();
    return roles[role]?.message || "Time to start your coding journey!";
  },
}));