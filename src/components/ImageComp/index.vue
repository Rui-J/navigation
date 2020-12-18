<template>
  <img class="image-comp" :src="_src" alt srcset />
</template>
<script>
import { getScrollContainer } from '@/utils/dom'
const LAZYS = []

export default {
  name: 'ImageComp',
  props: {
    distance: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      load: false,
      lazySrc: 'https://picsum.photos/id/11/50/30',
      src: 'https://picsum.photos/375/211?random',
      options: ''
    }
  },
  computed: {
    rootMargin () {
      return `${this.distance}px 0px ${this.distance}px 0px`
    },
    _src () {
      return this.load ? this.src : this.lazySrc
    }
  },
  mounted () {
    this.options = {
      root: getScrollContainer(this.$el),
      rootMargin: this.rootMargin
    }
    const lazy = LAZYS.find(item => {
      return (
        item.instance.root === this.options.root &&
        item.instance.rootMargin === this.options.rootMargin
      )
    }) || { target: [this] }
    if (!lazy.instance) {
      lazy.instance = new IntersectionObserver(entry => {
        entry.forEach(item => {
          if (item.isIntersecting) {
            const target = lazy.target.find(per => {
              return per.$el === item.target
            })
            target && !target.load && (target.load = true)
          }
        })
      }, this.options)
      LAZYS.push(lazy)
    } else {
      lazy.target.push(this)
    }
    lazy.instance.observe(this.$el)
  }
}
</script>
<style lang="scss" scoped>
.image-comp {
  object-fit: cover;
}
</style>
