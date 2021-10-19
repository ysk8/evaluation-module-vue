import Vue from "vue";
import Vuex from "vuex";
import { fetchAnswers, fetchEvaluations, fetchQuestions } from "../utils/api";

Vue.use(Vuex);

const SET_EVALUATIONS = "SET_EVALUATIONS";
const SET_QUESTIONS = "SET_QUESTIONS";
const SET_EVALUATION_SELECTED = "SET_EVALUATION_SELECTED";
const SET_OPTION_SELECTED = "SET_OPTION_SELECTED";
const SET_OPTION_SELECTED_INIT = "SET_OPTION_SELECTED_INIT";
const SET_FINISH_EVALUATION = "SET_FINISH_EVALUATION";

export default new Vuex.Store({
  state: {
    evaluations: [],
    questions: [],
    evaluationSelected: {},
    optionsSelected: null,
    allOptionsSelected: false,
    finishEvaluation: false,
  },
  getters: {
    evaluations: (state) => state.evaluations,
    questions: (state) => state.questions,
    evaluationSelected: (state) => state.evaluationSelected,
    optionsSelected: (state) => state.optionsSelected,
    allOptionsSelected: (state) => state.allOptionsSelected,
    finishEvaluation: (state) => state.finishEvaluation,
  },
  mutations: {
    [SET_EVALUATIONS](state, data) {
      state.evaluations = data;
    },
    [SET_QUESTIONS](state, data) {
      state.questions = data;
    },
    [SET_EVALUATION_SELECTED](state, data) {
      state.evaluationSelected = data;
    },
    [SET_OPTION_SELECTED](state, data) {
      state.optionsSelected[data.question - 1] = data.optionSected;
      const result = state.optionsSelected.filter((item) => item === null);
      console.log("finished RESULT", result);
      state.allOptionsSelected = result.length === 0;
    },
    [SET_OPTION_SELECTED_INIT](state, data) {
      state.optionsSelected = data;
      state.allOptionsSelected = false;
    },
    [SET_FINISH_EVALUATION](state, value) {
      state.finishEvaluation = value;
    }
  },
  actions: {
    fetchEvaluations({ commit }) {
      const evaluations = fetchEvaluations();
      commit(SET_EVALUATIONS, evaluations);
    },
    fetchQuestions({ commit }, id) {
      const questions = fetchQuestions(id);
      commit(SET_QUESTIONS, questions);
    },
    setEvaluationSelected({ commit }, data) {
      commit(SET_EVALUATION_SELECTED, data);
    },
    setOptionSelected({ commit }, data) {
      commit(SET_OPTION_SELECTED, data);
    },
    setOptionSelectedInit({ commit, getters }) {
      const optionsSelectedTemp = [];
      for (
        let index = 0;
        index < getters.evaluationSelected.amountOfQuestions;
        index++
      ) {
        optionsSelectedTemp.push(null);
      }
      commit(SET_OPTION_SELECTED_INIT, optionsSelectedTemp);
    },
    processEvaluation({ getters }, id) {
      const answers = fetchAnswers(id);
      let correctAnswers = {
        amount: 0,
        indexes: [],
      };
      let wrongAnswers = {
        amount: 0,
        indexes: [],
      };
      for (let index = 0; index < getters.optionsSelected.length; index++) {
        const element = getters.optionsSelected[index];
        if (element === answers.answers[index]) {
          correctAnswers.amount++;
          correctAnswers.indexes.push(index);
        } else {
          wrongAnswers.amount++;
          wrongAnswers.indexes.push(index);
        }
      }
      console.log(answers.answers, getters.optionsSelected);
      return {
        correctAnswers,
        wrongAnswers,
      };
    },
    setFinishEvaluation({ commit }, value) {
      commit(SET_FINISH_EVALUATION, value);
    }
  },
});
