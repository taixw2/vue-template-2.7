<template>
  <h2>{{ msg }}</h2>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  msg = "This is \"Class Component\" Component"
}
</script>