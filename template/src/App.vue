<template>
  <div id="app">
    <img src="@/assets/vue.svg" class="mx-auto w-64 mb-4" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <CompositionApi />
    <OptionsVersion />
    <JSXComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import CompositionApi from "./components/CompositionApi.vue";
import OptionsVersion from "./components/OptionsVersion.vue";
import JSXComponent from "./components/JSXComponent";

@Component({
  components: {
    HelloWorld,
    CompositionApi,
    OptionsVersion,
    JSXComponent
  },
})
export default class App extends Vue { }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
