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
    img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg",
    amountOfQuestions: getAmountOfQuestions(questionsEvaluation1),
  },
];

const evaluationsQuestions = [
  {
    id: "a",
    idEvaluation: "0",
    options: getOptions(questionsEvaluation0),
    questions: getQuestions(questionsEvaluation0),
  },
  {
    id: "b",
    idEvaluation: "1",
    options: getOptions(questionsEvaluation1),
    questions: getQuestions(questionsEvaluation1),
  },
];

const answers = [
  {
    id: "a",
    idEvaluation: "0",
    answers: getAnswers(questionsEvaluation0),
  },
  {
    id: "b",
    idEvaluation: "1",
    answers: getAnswers(questionsEvaluation1),
  },
];

function getQuestions(evaluation) {
  const questionsTemp = [];
  evaluation.forEach((value) => {
    questionsTemp.push(value.question);
  });
  return questionsTemp;
}
function getOptions(evaluation) {
  const optionsTemp = [];
  evaluation.forEach((value) => {
    optionsTemp.push(value.options);
  });
  return optionsTemp;
}
function getAnswers(evaluation) {
  const optionsTemp = [];
  evaluation.forEach((value) => {
    optionsTemp.push(value.answer);
  });
  return optionsTemp;
}

function getAmountOfQuestions(evaluation) {
  return getQuestions(evaluation).length;
}

export function fetchEvaluations() {
  return evaluations;
}

export function fetchQuestions(id) {
  return evaluationsQuestions.find((item) => item.idEvaluation === id);
}

export function fetchAnswers(id) {
  return answers.find((item) => item.idEvaluation === id);
}
