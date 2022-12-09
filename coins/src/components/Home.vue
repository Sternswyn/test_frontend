<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h1 class="mx-auto">Today's Cryptocurrency Prices by CoinCup</h1>
  </nav>
    <div class="container mt-2 is-full-width">
      <CoinList 
        v-if="hasData"
        :coins="coins" 
      />
    </div>
  </template>
  
  <script>
  import CoinList from './CoinList.vue'
  import axios from 'axios'
  
  export default {
    components: {
      CoinList
    },
    data() {
        return {
          coins: []
        }
      },
      computed: {
        hasData() {
          return this.coins.length > 0;
        }
      },
      methods: {
        
      },
      mounted() {
        axios
          .get('https://api.coincap.io/v2/assets')
          .then(response => (this.coins = response.data.data))
          .catch(error => console.log(error))
      }
      
  }
  </script>
  
  <style>
  .pagination {
    cursor: pointer;
  }
  </style>