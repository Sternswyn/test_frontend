<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h1 class="mx-auto">Historical Data for {{this.coinId}}</h1>
  </nav>
  <div class="container mt-2 is-full-width">
      
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" class="text-uppercase">Date</th>
            <th scope="col" class="text-uppercase">Open</th>
            <th scope="col" class="text-uppercase">High</th>
            <th scope="col" class="text-uppercase">Low</th>
            <th scope="col" class="text-uppercase">Close</th>
          </tr>
        </thead>
        <tbody v-if="hasData">
          <tr  v-for="element in sortCoinList" :key="element.date">
            <th>{{new Date(element.date).toLocaleDateString("en-GB")}}</th>
            <td>${{Number.parseFloat(element.open).toLocaleString('en-US')}}</td>
            <td>${{Number.parseFloat(element.max).toLocaleString('en-US')}}</td>
            <td>${{Number.parseFloat(element.min).toLocaleString('en-US')}}</td>
            <td>${{Number.parseFloat(element.close).toLocaleString('en-US')}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-center">
      <router-link :to="'/'">
        <button type="button" class="btn btn-primary">Go back</button>
      </router-link>
    </div>  
    
  </div>  
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return {
      coinDetails: [],
      sortedCoinDetals: [],
      coinId: this.$route.params.coinId,
      totalDays:7,
    }
  },
  methods: {
    getCurrectDayStart() {
      let startOfDay = new Date();
      // startOfDay.setUTCHours(0, 0, 0, 0);
      return startOfDay.getTime();
    },
    getData() {
      let oneDayInterval = 86400000;
      let end = this.getCurrectDayStart();
      let start = (end - oneDayInterval);
      // Adding 60000 miliseconds(1 minute) so we get the last available time for the day 
      end += 60000;
      for(let i = 0;i<this.totalDays;i++) {
        let url =`https://api.coincap.io/v2/assets/${this.coinId}/history?interval=h1&start=${start}&end=${end}`;
          axios 
          .get(url)
          .then(response => (
            this.coinDetails.push(this.computeDataFromDay(response.data.data))))
          .catch(error => console.log(error));
        end -= 86400000;
        start -= 86400000;
      };
    },
    computeDataFromDay(data) {
      if(data == []) {
        return {}
      }
      let openingPrice = data[0].priceUsd;
      let closingPrice = data[data.length - 1].priceUsd ;
      let prices = [];
      let date = new Date(data[0].time);
      data.forEach(element => {
        if(element.priceUsd){
          prices.push(element.priceUsd);
        } else {
          return {};
        }
      });
      prices.sort((a,b) => a-b);
      let maxPrice = prices[prices.length - 1];
      let minPrice = prices[0];
      return {
        open:openingPrice,
        close:closingPrice,
        max:maxPrice,
        min:minPrice,
        date: date,
      }
    }
    
  },
  computed: {
    hasData() {
      return this.coinDetails.length == this.totalDays;
    },
    sortCoinList(){
      return this.coinDetails.sort((a, b) => b.date - a.date);
    }
  },
  mounted() {
    this.getData()  
  }
}

</script>

<style>
.table>:not(caption)>*>* {
    padding: 1.5rem 0.5rem;
}
</style>