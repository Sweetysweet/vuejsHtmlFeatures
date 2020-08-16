<template>
  <div id="app">
    <vTable :users_data="USERS" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import vTable from "./components/table/v-table";
export default {
  name: "app",
  components: {
    vTable,
  },
  data: () => ({}),
  methods: {
    ...mapActions(["GET_USERS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["USERS"]),
  },
  mounted() {
    this.GET_USERS_FROM_API();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
