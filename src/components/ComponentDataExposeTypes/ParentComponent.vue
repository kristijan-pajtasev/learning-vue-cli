<template>
  <div>
    parent
    <div>{{firstCounter}}</div>
    <div>{{secondCounter}}</div>
    <div>
      <button @click="updateFirstCounter()">increment first</button>
      <button @click="updateSecondCounter()">increment second</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstCounter: 0,
      secondCounter: 0,
    }
  },
  methods: {
    updateFirstCounter() {
      this.firstCounter++;
    },
    updateSecondCounter() {
      this.secondCounter++;
    }
  }
}
</script>