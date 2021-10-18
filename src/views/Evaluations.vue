<template>
  <v-container>
    <h2>Welcome!</h2>
    <p>These are the tests asigned for today:</p>
    <v-row class="mt-2">
      <evaluation-card
        v-for="evaluation in evaluations"
        :key="evaluation.id"
        class="ma-2"
        :evaluation="evaluation"
      />
    </v-row>
  </v-container>
</template>

<script>
import EvaluationCard from "../components/EvaluationCard";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Evaluations",
  components: {
    EvaluationCard,
  },
  computed: {
    ...mapGetters(["evaluations"]),
  },
  methods: {
    ...mapActions(["fetchEvaluations"]),
  },
  created() {
    this.fetchEvaluations();
  },
};
</script>
