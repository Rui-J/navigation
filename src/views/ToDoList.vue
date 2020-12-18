<template>
  <div class="to-do-list">
    <v-list v-for="item in list" :key="item.title">
      <v-list-group v-model="item.active" :prepend-icon="item.action" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.list" :key="child.title" link :to="child.to">
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      list: [
        {
          title: '未完成',
          active: true,
          list: []
        },
        {
          title: '已完成',
          active: true,
          list: [
            {
              title: 'Intersection Observer 实现内容无限滚动',
              date: '2020-12-16',
              to: { name: 'IntersectionObserverScroll' }
            },
            {
              title: 'Intersection Observer 实现图片懒加载',
              date: '2020-12-18',
              to: { name: 'IntersectionObserverImage' }
            }
          ]
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
</style>
