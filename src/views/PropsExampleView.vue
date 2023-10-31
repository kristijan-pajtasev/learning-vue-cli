<template>
  <div class="about">
    <h1>Props example</h1>
    <div>
      <Greeting name="John" />
      <Greeting :name="name" />
      <Greeting v-bind:name="name" />
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
  components: {Greeting},
  data() {
    return { name: "John" }
  },
  mounted() {
    const _this = this;
    setTimeout(() => {
      _this.name = "Jane"
    }, 3000)
    console.log("mounted")
  }
}
</script>