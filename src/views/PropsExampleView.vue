<template>
  <div class="about">
    <h1>Props example</h1>
    <div>
      <Greeting />
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script>
import Greeting from "../components/Greeting.vue";
export default {
  components: {Greeting}
}
</script>