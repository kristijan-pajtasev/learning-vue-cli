<template>
  <div>
    <div>
      <div>data</div>
      <div>first: {{first}}</div>
      <div>second: {{second}}</div>
    </div>
    <div>
      <div>method</div>
      <div>first: {{firstMethod()}}</div>
      <div>second: {{secondMethod()}}</div>
    </div>
    <div>
      <div>computed</div>
      <div>first: {{firstComputedMethod}}</div>
      <div>second: {{secondComputedMethod}}</div>
    </div>
    <div>
      <div>Watch</div>
      <div>first: {{firstWatch}}</div>
      <div>second: {{secondWatch}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["firstCounter", "secondCounter"],
  data() {
    const {firstCounter, secondCounter} = this.$props;
    return {
      first: firstCounter,
      second: secondCounter,
      firstWatch: firstCounter,
      secondWatch: secondCounter,
    }
  },
  methods: {
    firstMethod() {
      console.log("firstMethod")
      return this.$props.firstCounter
    },
    secondMethod() {
      console.log("secondMethod")
      return this.$props.secondCounter
    }
  },
  computed: {
    firstComputedMethod() {
      console.log("firstComputedMethod")
      return this.$props.firstCounter
    },
    secondComputedMethod() {
      console.log("secondComputedMethod")
      return this.$props.secondCounter
    }
  },
  watch: {
    firstCounter () {
      console.log("first counter watch")
      this.firstWatch = this.$props.firstCounter
    },
    secondCounter () {
      console.log("second counter watch")
      this.secondWatch = this.$props.secondCounter
    }
  }
}
</script>