<template>
  <ul>
    <li v-for="item in listItems">List item</li>
  </ul>
</template>

<script>
export default {
  props: ["items"],
  computed: {
    listItems() {
      return this.$props.items;
    }
  },
  data() {
    return {}
  }
}
</script>