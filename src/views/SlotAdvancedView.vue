<template>
  <div class="about">
    <h1>Slots advanced example</h1>
    <ListWithSlots :items="items" >
      <template #title="titleProps">{{ titleProps.title}}</template>
      <template #default="defaultProps">{{ defaultProps.description }}</template>
    </ListWithSlots>

    <ListWithSlots :items="items" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
<script>
import ListWithSlots from '../components/slots/ListWithSlots.vue'
export default {
  components: {ListWithSlots},
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Item title 1",
          description: "Item description 1"
        },
        {
          id: 2,
          title: "Item title 2",
          description: "Item description 2"
        },
        {
          id: 3,
          title: "Item title 3",
          description: "Item description 3"
        }
      ]
    }
  },
}
</script>