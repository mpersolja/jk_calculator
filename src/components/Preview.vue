<template>
  <div>
    <h4>A</h4>
    <ul>
      <li v-if="A.base"
        @click="removeBase('A')">
        <span>{{ A.base.name }}</span>
        <span>{{ A.base.price | ammount }}</span>
      </li>
      <li v-for="(e, idx) in A.additions"
          :key="idx"
          @click="removeAddition(idx, 'A')">
        <span>{{ e.name }}</span>
        <span>{{ e.price | ammount }}</span>
      </li>
    </ul>
    <h4>B</h4>
    <ul>
      <li v-if="B.base"
        @click="removeBase('B')">
        <span>{{ B.base.name }}</span>
        <span>{{ B.base.price | ammount }}</span>
      </li>
      <li v-for="(e, idx) in B.additions"
          :key="idx"
          @click="removeAddition(idx, 'B')">
        <span>{{ e.name }}</span>
        <span>{{ e.price | ammount }}</span>
      </li>
    </ul>
    <h4>C</h4>
    <ul>
      <li v-if="C.base"
        @click="removeBase('C')">
        <span>{{ C.base.name }}</span>
        <span>{{ C.base.price | ammount }}</span>
      </li>
      <li v-for="(e, idx) in C.additions"
          :key="idx"
          @click="removeAddition(idx, 'C')">
        <span>{{ e.name }}</span>
        <span>{{ e.price | ammount }}</span>
      </li>
    </ul>
    <h3>Total <span>{{ grandTotal | ammount }}</span></h3>
    <pre v-if="productionCode">
Production code:

{{ productionCode }}
</pre>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'getPane'
      ]),
      A() {
        return this.getPane('A')
      },
      B() {
        return this.getPane('B')
      },
      C() {
        return this.getPane('C')
      },
      grandTotal() {
        let sum = 0;
        if(this.A.base) sum += this.A.base.price
        if(this.A.additions)
          this.A.additions.forEach(e => {
            sum += e.price
          })
        
        if(this.B.base) sum += this.B.base.price
        if(this.B.additions)
          this.B.additions.forEach(e => {
            sum += e.price
          })

        if(this.C.base) sum += this.C.base.price
        if(this.C.additions)
          this.C.additions.forEach(e => {
            sum += e.price
          })
        
        return sum
      },
      productionCode() {
        let pc = ''
        if(this.A.base) pc += this.A.base.code + ' '
        if(this.A.additions)
          this.A.additions.forEach(e => {
            pc += e.code + ' '
          })
        
        if(this.B.base || this.B.additions.length > 0)
          pc += '/ '

        if(this.B.base) pc += this.B.base.code + ' '
        if(this.B.additions)
          this.B.additions.forEach(e => {
            pc += e.code + ' '
          })
        
        if(this.C.base || this.B.additions.length > 0)
          pc += '/ '

        if(this.C.base) pc += this.C.base.code + ' '
        if(this.C.additions)
          this.C.additions.forEach(e => {
            pc += e.code + ' '
          })
        
        return pc
      }
    },
    filters: {
      // TODO: same as in Elements. implement a function
      // and use it (do not forget)
      ammount(value) {
        if (!value || Number.isNaN(value)) return
        return new Intl.NumberFormat('sl-SI', {
          currency: 'EUR',
          style: 'currency'
        }).format(value)
      }
    },
    methods: {
      removeAddition(idx, pane) {
        this.$store.dispatch('removeAddition', {'pane': pane, 'index': idx})
        console.log(idx);
      },
      removeBase(b) {
        this.$store.dispatch('removeBase', b)
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li:hover {
    cursor: url('../assets/equis.png'), auto;
    background-color: azure;
  }

  li>span:last-child {
    float: right;
  }
</style>