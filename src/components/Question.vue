<template>
  <div>
    <v-stepper-step
      color="deep-purple lighten-3"
      :editable="!finishEvaluation"
      :complete="currentQuestion > question.questionNumber"
      :step="question.questionNumber"
    >
      {{ question.question }}
      <div v-if="answered" class="small--color">Option Selected</div>
    </v-stepper-step>

    <v-stepper-content :step="question.questionNumber">
      <v-card class="mb-12" color="amber lighten-5" flat>
        <options
          class="pa-5"
          :options="question.options"
          :question="question.questionNumber"
          @answered="setAnswered"
        />
      </v-card>
      <v-btn
        class="mt-n7"
        color="deep-purple lighten-3"
        elevation="0"
        dark
        @click="$emit('nextQuestion')"
      >
        Next
      </v-btn>
    </v-stepper-content>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Options from "./Options";
export default {
  name: "Question",
  components: { Options },
  props: {
    question: {
      type: Object,
    },
    currentQuestion: {
      type: Number,
    },
  },
  data() {
    return {
      answered: false,
    };
  },
  computed: {
    ...mapGetters(["finishEvaluation"]),
  },
  methods: {
    setAnswered(value) {
      this.answered = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.small--color {
  color: #b39ddb;
  font-size: 10px;
  font-weight: 400;
}
</style>
