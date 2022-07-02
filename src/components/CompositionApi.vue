<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const msg = ref("This is \"Composition Api\" Component");
</script>
