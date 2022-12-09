<template>
  <div class="list-group m-4">
    <div class="row custom text-left text-uppercase">
        <div class="col align-self-center">Rank</div>
        <div class="col align-self-center">Name</div>
        <div class="col align-self-center">Price</div>
        <div class="col align-self-center">% 24h</div>
        <div class="col align-self-center">Volume(24h)</div>
    </div>
    <div 
      @click="handleOpenCoinDetailPage(el.id)"
      v-for="el in paginatedList" :key="el.id" class="list-group-item list-group-item-action">
        <div class="row text-left m-2">
          <div class="col">{{el.rank}}</div>
          <div class="col"><b>{{el.name}}<span class="badge badge-secondary">{{el.symbol}}</span></b></div>
          <div class="col usd">${{Number.parseFloat(el.priceUsd).toLocaleString('en-US')}}</div>
          <div class="col">{{Number.parseFloat(el.changePercent24Hr).toLocaleString('en-US')}}%</div>
          <div class="col">${{Number.parseFloat(el.volumeUsd24Hr).toLocaleString('en-US')}}</div>
        </div>
    </div>
  </div>
  <paginate
      v-model="page"
      :page-count="pagesCount"
      :page-range="7"
      :margin-pages="1"
      :click-handler="changePage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination mt-2  justify-content-center flex-wrap'"
      :page-class="'page-item is-hoverable'"
      >
  </paginate>
</template>

<script>
import Paginate from 'vuejs-paginate-next';

export default {
props: {
  coins: Array,
},
components: {
  Paginate
},
data() {
    return {
      paginatedList: [],
      pagination_items_per_page: 15,
      pagination_offset: 0,
      page: 1,
      pagination_items_total: 100,
      formattedNumber: '',
    }
  },
  methods: {
    changePage(page_num) {
      this.page = page_num;
      this.pagination_offset = (this.pagination_items_per_page * page_num) - this.pagination_items_per_page;

      this.paginatedList = this.coins.slice(this.pagination_offset, this.pagination_offset + this.pagination_items_per_page);
      window.scrollTo(0,0)
    },
    handleOpenCoinDetailPage(id) {
      this.$router.push({
        path: '/coindetails/' + id,
      })
    }
  },
  computed: {
      pagesCount() {
          return Math.ceil(this.pagination_items_total / this.pagination_items_per_page)
    }
  },
  mounted() {
      this.changePage(1)
  }
}
</script>

<style>
.pagination,
.list-group-item {
cursor: pointer;
}
.custom {
  height: 40px;
  padding: 0 30px;
  font-weight: 600;
  font-size: 1.1em;
}
.badge {
  color: black;
  font-weight: lighter;
}
.usd {
  font-weight: 600;
}

</style>