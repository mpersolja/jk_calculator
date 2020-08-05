<template>
  <ul id="panes">
    <li>
      <div
        @click="toggleClass($event)"
        :class="{ 'active': active == 'A' }"
        id="A"></div>
      <p>A</p>
    </li>
    <li>
      <div
        @click="toggleClass($event)"
        :class="{ 'active': active == 'B' }"
        id="B"></div>
      <p>B</p>
    </li>
    <li>
      <div
        @click="toggleClass($event)"
        :class="{ 'active': active == 'C' }"
        id="C"></div>
      <p>C</p>
    </li>
  </ul>
</template>

<script>
// import Store from '../store'
import { mapGetters } from 'vuex';

export default {
  name: "Panels",
  computed: {
    ...mapGetters({
      active: 'getActive'
    })
  },
  methods: {
    toggleClass(evt) {
      this.$store.dispatch('changeActivePane', evt.target.id)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#panes {
  display: flex;
  justify-content: center;
}
#panes li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px 20px;
}

#panes li div {
  height: 150px;
  width: 20px;
  background-color: blue;
}

#panes li div.active {
  background-color: red;
}
</style>
