import { questionsEvaluation0, questionsEvaluation1 } from "./questions.js";

const evaluations = [
  {
    id: "0",
    name: "Evaluation 1",
    img: "https://images.pexels.com/photos/5185093/pexels-photo-5185093.jpeg",
    amountOfQuestions: getAmountOfQuestions(questionsEvaluation0),
  },
  {
    id: "1",
    name: "Evaluation 2",
    img: "https://images.pexels.com/photos/68173/flash-tesla-coil-experiment-faradayscher-cage-68173.jpeg",
    amountOfQuestions: getAmountOfQuestions(questionsEvaluation1),
  },
];

const evaluationsQuestions = [
  {
    id: "a",
    idEvaluation: "0",
    questions: getQuestions(questionsEvaluation0),
  },
  {
    id: "b",
    idEvaluation: "1",
    questions: getQuestions(questionsEvaluation1),
  },
];

function getQuestions(evaluation) {
  const questionsTemp = [];
  evaluation.forEach((value) => {
    questionsTemp.push(value.questions);
  });
  return questionsTemp;
}

function getAmountOfQuestions(evaluation) {
  const questionsTemp = [];
  evaluation.forEach((value) => {
    questionsTemp.push(value.questions);
  });
  return questionsTemp.length;
}

export function fetchEvaluations() {
  return evaluations;
}

export function fetchQuestions(id) {
  return evaluationsQuestions.filter((item) => item.idEvaluation === id);
}
