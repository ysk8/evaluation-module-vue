<template>
  <v-app>
    <v-app-bar app color="grey darken-3" dark flat>
      <div class="d-flex align-center">
        <h1 class="amber--text text--lighten-2">EvaMax</h1>
        <h4 class="purple--text text--lighten-3">2600</h4>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
