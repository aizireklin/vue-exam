<template>
    <div>
      <pre>{{ jsonData }}</pre>
    </div>
  </template>
  
  <script>
  import data from '@/assets/main.json';
  
  export default {
    data() {
      return {
        jsonData: JSON.stringify(data, null, 2)
      }
    }
  }
  </script>