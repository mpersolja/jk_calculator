<template>
  <div>
    <h4>Base</h4>
    <ul>
      <li v-for="(e, idx) in baseElements"
          :key="idx"
          @click="addBase($event, e)">
        <span>{{ e.name }}</span>
        <span>{{ e.price | ammount }}</span>
      </li>
    </ul>
    <h4>Additions</h4>
    <ul>
      <li v-for="(e, idx) in additionalElements"
          :key="idx"
          @click="appendAddition($event, e)">
        <span>{{ e.name }}</span>
        <span>{{ e.price | ammount }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import BaseElements from "../assets/base-elements";
  import Additions from "../assets/additions";
import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        baseElements: BaseElements,
        additionalElements: Additions
      };
    },
    filters: {
      ammount(value) {
        if (!value || Number.isNaN(value)) return "";
        return new Intl.NumberFormat("sl-SI", {
          style: "currency",
          currency: "EUR"
        }).format(value);
      }
    },
    methods: {
      addBase(event, element) {
        if(this.active)
          this.$store.dispatch('changeBase', { pane: this.active, base: element })
      },
      appendAddition(event, element) {
        if(this.active)
          this.$store.dispatch('appendAddition', { pane: this.active, addition: element })
      }
    },
    computed: {
      ...mapGetters({
        active: 'getActive'
      })
    }
  };
</script>

<style scoped>
  span:last-child {
    float: right;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
  }
  li {
    margin: 5px 0;
  }
  li:hover {
    cursor: pointer;
    background-color: rgba(0,0,0,.1);
  }
</style>