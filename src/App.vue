<template>
  <div id="app">
    <panels></panels>
    <div class="split">
      <elements></elements>
      <preview></preview>
    </div>
  </div>
</template>

<script>
  import Panels from "./components/Panels"
  import Elements from "./components/Elements"
  import Preview from "./components/Preview"

  export default {
    name: "App",
    components: {
      panels: Panels,
      elements: Elements,
      preview: Preview
    }
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 60px 0;
  }

  .split {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .split>div:first-child {
    width: 40%;
    /* background-color: bisque; */
  }

  .split>div:last-child {
    width: 40%;
    background-color: lightskyblue;
  }
</style>