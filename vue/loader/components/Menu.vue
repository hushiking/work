<template>
  <ul>
    <li v-for="(value, index) in fruits">{{index+1}}.{{value}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        fruits: ['apple', 'banana', 'pear', 'orange']
      }
    }
  }
</script>