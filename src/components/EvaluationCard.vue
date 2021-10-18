<template>
  <v-card width="290">
    <v-img height="250" :src="evaluation.img"></v-img>
    <v-card-title>{{ evaluation.name }}</v-card-title>
    <v-card-text class="mt-n5"
      >{{ evaluation.amountOfQuestions }} Questions
    </v-card-text>
    <v-card-actions class="mt-n2">
      <v-btn
        color="deep-purple lighten-3"
        dark
        @click="startTest(evaluation.id)"
      >
        Start Test
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "EvaluationCard",
  props: {
    evaluation: {
      type: Object,
    },
  },
  data: () => ({}),
  methods: {
    startTest(id) {
      console.log("START TEST", id);
    },
  },
};
</script>
