<template>
  <div class="scroll">
    <div class="scroll__list">
      <div class="scroll__item" v-for="(item,index) in list" :key="index">{{item}}</div>
      <load-more :status="loadStatus" @load-more="getList"></load-more>
    </div>
  </div>
</template>

<script>
import LoadMore from '@/components/LoadMore'
const data = [
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx',
  'xxxxxxxxx'
]
export default {
  name: 'IntersectionObserverScroll',
  components: {
    LoadMore
  },
  data () {
    return {
      loadStatus: '',
      list: [...data]
    }
  },
  methods: {
    getList () {
      this.loadStatus = 'loading'
      console.log('getList')
      setTimeout(() => {
        this.list.push(...data)
        this.loadStatus = ''
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.scroll__list {
  height: 80vh;
  overflow: auto;
  // &:after{

  // }
  .scroll__item {
    height: 50px;
  }
}
</style>
