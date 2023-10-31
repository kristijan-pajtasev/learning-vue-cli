<template>
  <CounterParent />
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
import CounterParent from "../components/CounterParent.vue";
export default {
  components: {CounterParent},
  data() {
  },
  mounted() {
  }
}
</script>