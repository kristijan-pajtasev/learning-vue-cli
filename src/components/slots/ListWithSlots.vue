<template>
  <ul>
    <li v-for="item in listItems" :key="item.id">
      <div>
        <slot name="title"></slot>
      </div>
      <div>
        <slot name="default"></slot>
      </div>
    </li>
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