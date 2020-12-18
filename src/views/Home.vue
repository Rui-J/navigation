<template>
  <div class="home">
    <v-list three-line flat>
      <template v-for="item in list">
        <v-list-item :key="item.title">
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
            <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      list: [
        { title: 'title', subtitle: 'subtitle', to: '' },
        { title: 'title2', subtitle: 'subtitle' }
      ]
    }
  }
}
</script>
