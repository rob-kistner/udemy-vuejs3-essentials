<template>
  <div id="app" class="container">
    <debounce />
    <lodash-test />
  </div>
</template>

<script>
import Debounce from '@/components/Debounce';
import LodashTest from '@/components/LodashTest';

export default {
  data() {
    return {
    }
  },
  components: {
    debounce: Debounce,
    'lodash-test': LodashTest,
  }
}
</script>

<style lang="scss">

</style>