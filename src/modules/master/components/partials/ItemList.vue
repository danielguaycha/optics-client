<template>
  <v-list-group dense color="text" v-if="isVisible">
    <template v-slot:activator>
      <v-list-item-icon>
        <v-icon class="text">{{icon}}</v-icon>
      </v-list-item-icon>
      <v-list-item-title style="font-weight:300" class="text">{{ text }}</v-list-item-title>
    </template>
    <template v-if="children">
      <div  class="subitems">
        <SubItemList v-for="subitem in this.children.list" class="sub" :key="subitem.text"
          :modulo="subitem.modulo"
          :isChildren="true"
          :text="subitem.text"
          :icon="subitem.icon"
          :linkTo="subitem.to"
        ></SubItemList>
      </div>
    </template>
  </v-list-group>
</template>

<script>

import SubItemList from "./SubItemList";
export default {
  name: "ItemList",
  components: {SubItemList  },
  data: () => ({
    permitted: false
  }),
  props: {
    modulo: {
      type: String,
      default: "none"
    },
    active: {
      type: Boolean,
      default: true
    },
    icon: String,
    text: String,
    children: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    isVisible() {
      return true;
    }
  }
};
</script>
<style lang="css">
.text {
  color: #fff !important;
}
.subitems{
    background: #fff2!important;
    border-radius: 20px;
    margin-left: 5px;
    margin-right: 5px;
}
</style>
