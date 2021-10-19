<template>
  <v-card width="290">
    <v-img height="250" :src="evaluation.img"></v-img>
    <v-card-title>{{ evaluation.name }}</v-card-title>
    <v-card-text class="mt-n5"
      >{{ evaluation.amountOfQuestions }} Questions
    </v-card-text>
    <v-card-actions class="mt-n2 ma-2">
      <v-btn
        color="deep-purple lighten-3"
        elevation="0"
        dark
        block
        @click="startTest(evaluation.id)"
      >
        Start Test
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "EvaluationCard",
  props: {
    evaluation: {
      type: Object,
    },
  },
  data: () => ({}),
  methods: {
    ...mapActions(["setEvaluationSelected"]),
    startTest(id) {
      console.log("START TEST", id);
      this.setEvaluationSelected(this.evaluation);
      this.$router.push({
        name: "Evaluation",
        params: { id, name: this.evaluation.name, img: this.evaluation.img },
      });
    },
  },
};
</script>
