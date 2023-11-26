<template>
  <div class="about">
    <h1>Slots example</h1>
    <PopUpMessage>
      Content
    </PopUpMessage>
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
</style>
<script>
import PopUpMessage from '../components/slots/PopUpMessage.vue'
export default {
  components: {PopUpMessage},
  data() {
    return {  }
  },
}
</script>