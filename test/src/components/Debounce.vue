<template>
  <div id="debounce">
    <h2>Debounce Test</h2>
    <p>This is just from the single function in a .js file imported into the component.</p>
    <div>
      <label for="">Search</label>
      <input type="text" v-model="search" />
    </div>
  </div>
</template>

<script>
import { debounce } from '@/lib/debounce';

export default {
  name: 'debounce',
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search: debounce((newVal) => {
      console.log(newVal);
    }, 500)
  },
}
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  #debounce {
    font-family: Arial, sans-serif;
  }

</style>