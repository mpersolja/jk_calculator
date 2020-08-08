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
  body {
    background-color: #E0FBFC;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #253237;
    margin: 2rem 0;
  }

  .split {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }


  .split>div {
    padding: 2rem;
    width: 40%;
  }

  .split>div:first-child {
    border-right: 1px solid rgba(92,107,115,.1);
  }

  @media screen and (max-width: 535px) {
    .split {
      display: block;
    }

    .split>div {
      width: auto;
    }

    .split>div:first-child {
      border-right: 0;
    }
  }
</style>