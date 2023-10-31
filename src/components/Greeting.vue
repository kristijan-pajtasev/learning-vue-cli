<template>
  <div>Hello, {{ name }} {{personName}} {{getName()}}</div>
</template>

<script>
export default {
  props: {"name": String},
  data() {
    return {
      personName: this.$props.name
    }
  },
  methods: {
    getName() {
      return this.$props.name
    }
  }
}
</script>
