<template>
  <div>
    <div>{{firstCounter}}</div>
    <div>{{secondCounter}}</div>
    <ChildComponent :firstCounter="firstCounter" :secondCounter="secondCounter" />
    <div>
      <button @click="updateFirstCounter()">increment first</button>
      <button @click="updateSecondCounter()">increment second</button>
    </div>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
export default {
  components: {ChildComponent},
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