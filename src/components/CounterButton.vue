<!--Child component-->
<template>
  <div>
    <button type="button" @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleClick() {
      this.$emit("increment-counter");
    }
  }
}
</script>