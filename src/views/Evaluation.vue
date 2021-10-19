<template>
  <v-container>
    <v-row class="pa-7">
      <v-card class="px-4" flat>
        <v-img height="175" :src="img">
          <v-card-title class="white--text mx-5 mt-4">
            <h2 class="box-blur pa-5">{{ name }}</h2>
          </v-card-title>
          <v-row v-if="allOptionsSelected" class="mx-7 mt-n5">
            <v-col>
              <v-btn
                v-if="!finishEvaluation"
                color="grey darken-4"
                elevation="0"
                dark
                large
                @click="submitEvaluation"
              >
                Submit and Process Evaluation
              </v-btn>
              <v-btn
                v-else
                color="deep-purple lighten-3"
                elevation="0"
                dark
                large
                @click="finishEvaluationIn"
              >
                Finish Evaluation
              </v-btn>
            </v-col>
            <v-col v-if="processFinished" class="mt-n15">
              <v-card class="px-5" elevation="2">
                <v-col class="d-inline-flex align-center no-gutters mb-n3">
                  <h4>Correct Answers:</h4>
                  <h2 class="pl-2">
                    {{ correctAnswersAmount }}
                  </h2>
                </v-col>
                <v-col class="d-inline-flex align-center no-gutters mt-n3">
                  <h4>Wrong Answers:</h4>
                  <h2 class="pl-2">
                    {{ wrongAnswersAmount }}
                  </h2>
                </v-col>
              </v-card>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-row>
    <v-row class="mt-n12"><questions :questions="questions" /></v-row>
    <v-row v-if="allOptionsSelected" class="mx-15 mt-n3 mb-5">
      <v-btn
        v-if="!finishEvaluation"
        color="grey darken-4"
        elevation="0"
        dark
        large
        @click="submitEvaluation"
      >
        Submit and Process Evaluation
      </v-btn>
      <v-btn
        v-else
        color="deep-purple lighten-3"
        elevation="0"
        dark
        large
        @click="finishEvaluationIn"
      >
        Finish Evaluation
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Questions from "../components/Questions";
export default {
  name: "Evaluation",
  components: { Questions },
  data() {
    return {
      id: null,
      name: "",
      img: "",
      processFinished: false,
      correctAnswersAmount: 0,
      wrongAnswersAmount: 0,
    };
  },
  computed: {
    ...mapGetters([
      "questions",
      "optionsSelected",
      "allOptionsSelected",
      "finishEvaluation",
    ]),
  },
  methods: {
    ...mapActions([
      "fetchQuestions",
      "setOptionSelectedInit",
      "processEvaluation",
      "setFinishEvaluation",
    ]),
    async submitEvaluation() {
      const processedResult = await this.processEvaluation(this.id);
      this.setFinishEvaluation(true);
      console.log("processedResult", this.processedResult);
      this.correctAnswersAmount = processedResult.correctAnswers.amount;
      this.wrongAnswersAmount = processedResult.wrongAnswers.amount;
      this.processFinished = true;
    },
    finishEvaluationIn() {
      this.setFinishEvaluation(false);
      this.$router.push({
        name: "Evaluations",
      });
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.name = this.$route.params.name;
    this.img = this.$route.params.img;
    console.log("CREATED", this.id);
    this.fetchQuestions(this.id);
    this.setOptionSelectedInit();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate", to, from, next);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave", to, from, next);
    next();
  },
};
</script>

<style lang="scss" scoped>
.box-blur {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  line-height: 1;
 -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
</style>
