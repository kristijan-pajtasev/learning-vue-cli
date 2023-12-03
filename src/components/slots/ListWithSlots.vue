<template>
  <ul>
    <li v-for="item in listItems" :key="item.id">
      <div>
        <slot v-if="$slots.title" name="title"></slot>
        <div v-else>{{item.title}}</div>
      </div>
      <div>
        <slot v-if="$slots.default" name="default"></slot>
        <div v-else>{{item.description}}</div>
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