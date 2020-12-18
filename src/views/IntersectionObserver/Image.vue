<template>
  <div class="image">
    <div class="image__list">
      <div class="image__item" v-for="item in 10" :key="item">
        <image-comp class="image__item-image"></image-comp>
      </div>
    </div>
  </div>
</template>

<script>
import ImageComp from '@/components/ImageComp'
export default {
  name: 'IntersectionObserverImage',
  components: {
    ImageComp
  }
}
</script>
<style lang="scss" scoped>
.image__item-image{
  width: 100%;
  height: 300px;
}
</style>
