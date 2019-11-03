<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import CardList from './views/CardList';

export default {
  name: 'App',
  components: {
    CardList,
  },
  data: () => ({
    //
  }),
};
</script>
