<!--Parent component-->
<template>
  <div>
    <div>Number of clicks: {{counter}}</div>
    <CounterButton v-on:increment-counter="increment"></CounterButton>
  </div>
</template>

<script>
import CounterButton from './CounterButton.vue';
export default {
  components: {CounterButton},
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++;
    }
  }
}
</script>