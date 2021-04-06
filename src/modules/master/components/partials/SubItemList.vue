<template>
    <div v-if="isVisible">

        <v-list-item link :to="linkTo">

            <template>

                <v-list-item-title v-if="!textleft"  style="padding:0px; font-weight:300;" class="textColor" v-text="text" ></v-list-item-title>
                
                <v-list-item-action>
                    <v-icon class="textColor"> {{icon}}</v-icon>
                </v-list-item-action>
                
                <v-list-item-content v-if="textleft">
                    <v-list-item-title style="font-weight:300" class="textColor" v-text="text" ></v-list-item-title>
                </v-list-item-content>
                
            </template>
        </v-list-item>
    </div>
</template>
<script>

export default {
    name:"SubItemList",
    components:{
        // MenuSeparator
    },
    created() {
    },
    data:()=>({
        permitted : false
    }),
    props:{
        modulo:{
            type:String,
            default:'none',
        },
        linkTo:Object,
        text:String,
        base:{
            type:Boolean,
            default:false
        },
        isChildren:{
            type:Boolean,
            default:false
        },
        icon:String,
        textleft:{
            type: Boolean,
            default:true
        },

        active:{
            type: Boolean,
            default:true
        }
    },
    computed:{
        isVisible(){
            return true
        }
    }
}
</script>
<style lang="css">
    .textColor{
        color:#fff!important;
    }
</style>
