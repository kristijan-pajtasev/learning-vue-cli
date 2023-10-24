<script>
export default {
  data() {
    return {
      firstName: this.$props.firstName,
      lastName: this.$props.lastName
    }
  },
  props: ["firstName", "lastName"],
  methods: { }
}
</script>

<template>
  <div>
    <div>{{firstName}}, {{lastName}}</div>
  </div>
</template>

