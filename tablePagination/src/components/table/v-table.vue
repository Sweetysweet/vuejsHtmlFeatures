<template>
  <div class="v-table">
    <div class="v-table__header">
      <p @click="sortByName">
        Name
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByPointsEarned">
        Points earned
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByPointsSpent">
        Points spent
        <i class="material-icons">unfold_more</i>
      </p>
      <p @click="sortByDate">
        Registration date
        <i class="material-icons">unfold_more</i>
      </p>
    </div>
    <div class="v-table__body">
      <v-table-row v-for="row in paginatedUsers" :key="row.id" :row_data="row" />
    </div>
    <div class="v-table__pagination">
      <transition-group name="fade" class="row">
        <div
          class="page"
          v-for="page in pages"
          :key="page"
          :class="{'page__selected': page === pageNumber}"
          @click="pageClick(page)"
        >{{page}}</div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import vTableRow from "./v-table-row";

export default {
  name: "v-table",
  props: {
    users_data: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    // количество пользователей на странице
    usersPerPage: 10,
    pageNumber: 1,
  }),
  computed: {
    pages() {
      return Math.ceil(this.users_data.length / 10);
    },
    paginatedUsers() {
      // номер страницы * на кол-во пользователей на странице
      let from = (this.pageNumber - 1) * this.usersPerPage;
      let to = from + this.usersPerPage;
      return this.users_data.slice(from, to);
    },
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByName() {
      this.users_data.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortByPointsEarned() {
      this.users_data.sort((a, b) => a.points_earned - b.points_earned);
    },
    sortByPointsSpent() {
      this.users_data.sort((a, b) => a.points_spent - b.points_spent);
    },
    sortByDate() {
      this.users_data.sort((a, b) =>
        a.registration_date.localeCompare(b.registration_date)
      );
    },
  },
  components: { vTableRow },
};
</script>

<style scoped>
.v-table {
  max-width: 900px;
  margin: 0 auto;
}
.v-table__header {
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #e7e7e7;
}
.v-table__header p {
  display: flex;
  align-items: center;
  flex-basis: 25%;
  text-align: left;
  cursor: pointer;
}
.v-table__pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}
.page {
  padding: 8px;
  margin-right: 10px;
  border: solid 1px #e7e7e7;
}
.page:hover {
  background: #aeaeae;
  transition: 0.3s ease-in;
  cursor: pointer;
  color: #fff;
}
.page__selected {
  background: #aeaeae;
  cursor: pointer;
  color: #fff;
}

.fade-enter-active,
.fade-leave-active {
  transition: background 0.3s;
}
.fade-enter,
.fade-leave {
  background: #aeaeae;
}

.row {
  display: flex;
  flex-direction: row;
}
</style>