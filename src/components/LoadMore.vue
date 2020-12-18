<template>
  <div ref="loadMore" class="load-more">
    <div v-show="loadMore.loading||loadMore.tips" class="load-more__container">
      <span class="load-more__tips">{{ loadMore.tips }}</span>
    </div>
  </div>
</template>
<script>
import { getScrollContainer } from '@/utils/dom'
export default {
  name: 'LoadMore',
  props: {
    status: {
      type: String,
      default: ''
    },
    distance: {
      type: Number,
      default: 50
    }
  },
  computed: {
    loadMore () {
      const obj = {
        '': {
          loading: false,
          tips: ''
        },
        nomore: {
          loading: false,
          tips: '没有更多了'
        },
        loading: {
          loading: true,
          tips: '加载中...'
        },
        nodata: {
          loading: false,
          tips: '无数据'
        },
        loadfail: {
          loading: false,
          tips: '加载失败'
        }
      }
      return obj[this.status]
    }
  },
  mounted () {
    this.init()
  },
  destroyed () {
    this.intersectionObserver.disconnect()
  },
  methods: {
    init () {
      this.intersectionObserver = new IntersectionObserver(
        (entry, observe) => {
          if (entry[0].isIntersecting && !this.status) {
            this.$emit('load-more')
          }
        },
        {
          root: getScrollContainer(this.$refs.loadMore),
          rootMargin: `0px 0px ${this.distance}px 0px`
        }
      )
      this.intersectionObserver.observe(this.$refs.loadMore)
    }
  }
}
</script>

<style lang="scss" scoped>
.load-more__container {
  padding: 6px 0;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.load-more__tips {
  margin-left: 6px;
  font-size: 12px;
  color: #bfbfbf;
}
</style>
