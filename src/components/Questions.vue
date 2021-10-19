<template>
  <v-col>
    <v-stepper v-model="currentQuestion" vertical non-linear elevation="2">
      <question
        v-for="(question, index) in questions.questions"
        :key="index"
        :question="{
          question,
          options: questions.options[index],
          questionNumber: index + 1,
        }"
        :currentQuestion="currentQuestion"
        @nextQuestion="currentQuestion++"
      />
    </v-stepper>
  </v-col>
</template>

<script>
import Question from "./Question";
export default {
  name: "Questions",
  components: { Question },
  props: {
    questions: {
      type: Object,
    },
  },
  data() {
    return {
      currentQuestion: 1,
    };
  },
};
</script>

<style lang="scss" scoped></style>
