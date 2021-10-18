import Vue from "vue";
import Vuex from "vuex";
import { fetchEvaluations, fetchQuestions } from "../utils/api";

Vue.use(Vuex);

const SET_EVALUATIONS = "SET_EVALUATIONS";
const SET_QUESTIONS = "SET_QUESTIONS";

export default new Vuex.Store({
  state: {
    evaluations: [],
    questions: [],
  },
  getters: {
    evaluations: (state) => state.evaluations,
    questions: (state) => state.questions,
  },
  mutations: {
    [SET_EVALUATIONS](state, data) {
      state.evaluations = data;
    },
    [SET_QUESTIONS](state, data) {
      state.evaluations = data;
    },
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
  },
});
