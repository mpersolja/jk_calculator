<template>
  <div class="center">
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
  </div>
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

<style scoped>
.center {
  text-align: center;
}

#panes {
  display: inline-block;
}

#panes li {
  display: inline-block;
  padding: 0 1rem;
}

#panes li div {
  height: 10rem;
  width: 2rem;
  background-color: #5c6b73;
}

#panes li div.active {
  background-color: #9DB4C0;
}
</style>
