<template>
  <v-list-item dense class="avatar px-2">
    <v-list-item-avatar>
      <img :src="user.image" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title style="color:#fff">{{user.fullname}}</v-list-item-title>
      <v-list-item-subtitle style="color:#4c7">{{position}}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: "AvatarMenu",
  props: {
    user: {
      type: Object,
      default: function () {
        return {
          image: "",
          fullname: ""
        }
      }
    },
    position: String
  }
};
</script>
<style lang="css">
.avatar {
    margin: 0;
}
</style>
