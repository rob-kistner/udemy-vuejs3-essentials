<template>
  <div id="lodash-test">
    <h2>Lodash Tests</h2>
    <p>This is imported from LoDash.</p>
    <button @click="printIt">Print It</button>
    <p>{{ myvalue }}</p>
  </div>
</template>

<script>
  import _get from 'lodash/get';
  import _debounce from 'lodash/debounce';

  export default {
    data() {
      return {
        foo: {
          bar: 'Debounce Ended'
        },
        myvalue: 'Default value'
      }
    },
    methods: {
      printIt: _debounce(function() {
        this.myvalue = _get(this.foo, 'bar');
      }, 1500),
    }
  }
</script>

<style scoped lang="scss">
  #lodash-test {
    margin-top: 3rem;
    border-top: solid 5px #000;
  }
</style>