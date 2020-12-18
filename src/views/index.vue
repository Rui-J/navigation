<template>
  <v-app>
    <v-app-bar
      app
      absolute
      color="#43a047"
      dark
      shrink-on-scroll
      prominent
      src="../assets/images/appbar.jpg"
      fade-img-on-scroll
      scroll-threshold="500"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>{{$route.name}}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <!-- <v-list-item-group v-model="group" active-class="deep-purple--text "> -->
        <v-list-item to="/home">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <!-- <v-list-item :to="{name:'Account'}">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
        </v-list-item>-->
        <!-- </v-list-item-group> -->
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      drawer: false,
      group: ''
    }
  }
}
</script>
