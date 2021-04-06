<template>

    <v-app id="dashboardMain">
      <Sidebar />
      <v-app-bar app dense>
        <v-toolbar-title>Page title</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu
            left
            bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                icon
                v-bind="attrs"
                v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
                v-for="n in 5"
                :key="n"
                @click="() => {}"
            >
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <transition mode="out-in">
            <router-view />
          </transition>
        </v-container>
      </v-main>

    </v-app>

</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  name: "Main",
  components: {Sidebar}
}
</script>

<style scoped>

</style>
