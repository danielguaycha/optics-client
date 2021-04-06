<template>
  <v-navigation-drawer  :clipped="false"
                        :floating="false"
                        :mini-variant="false"
                        app
                        v-model="drawer"
                        dark>
    <v-list dense>

      <div v-for="item in menus" :key="item.text">


        <SubItemList
            v-if="!(item.children || item.separator)"
            :linkTo="item.to"
            :modulo="item.modulo"
            :icon="item.icon"
            :text="item.text"
        ></SubItemList>

        <div v-if="!(!item.children || item.separator)">
          <ItemList
              :modulo="item.modulo"
              :icon="item.icon"
              :text="item.text"
              :children="{list:item.children}"
          ></ItemList>
        </div>

      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import SubItemList from "./partials/SubItemList";
import ItemList from "./partials/ItemList";
export default {
  name: "Sidebar",
  components: {ItemList, SubItemList},
  data: () => ({
    drawer: true,
    menus: [
      { icon: "mdi-chart-areaspline", text: "Dashboard", to: { name: 'main' } },
    ]
  })
}
</script>

<style scoped>

</style>
