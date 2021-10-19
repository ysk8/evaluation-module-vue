<template>
  <v-radio-group v-model="selected" @change="setOption">
    <v-radio
      v-for="(option, index) in options"
      :key="index"
      :label="option"
      :value="index"
      :disabled="finishEvaluation"
      color="amber lighten-2"
    ></v-radio>
  </v-radio-group>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Options",
  props: {
    options: {
      type: Array,
    },
    question: {
      type: Number,
    },
  },
  data() {
    return {
      selected: null,
    };
  },
  computed: {
    ...mapGetters(["finishEvaluation"]),
  },
  methods: {
    ...mapActions(["setOptionSelected"]),
    setOption() {
      console.log("setOption", this.selected);
      if (this.selected !== null) {
        this.setOptionSelected({
          question: this.question,
          optionSected: this.selected,
        });
        this.$emit("answered", true);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
