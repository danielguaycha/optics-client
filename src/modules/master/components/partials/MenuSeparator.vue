<template>
    <div v-if="isVisible">
        <p 
        :style="{
            paddingLeft:'15px',
            fontSize:'11px',
            fontWeight: 400,
            marginTop:'25px',
            marginBottom: 0,
                color:'#aaa'
            }">
        {{text}}
        </p>
        
        
    </div>
</template>
<script>


export default {
    name:'MenuSeparator',
    data:()=>({
        permitted : false
    }),
    props:{
        modulo:{
                type:String,
                default:'none',
        },
        active:{
            type: Boolean,
            default:true
        },
        text:String,
        title:{
            type:Boolean,
            default:false
        },
        subitem:{
            type:Boolean,
            default:false
        },
    },
    computed:{
        isVisible(){
            return true
            if(this.modulo==='none' || this.modulo === undefined) this.permitted = false;
            this.$permiss.isPermiss(this.modulo)?this.permitted=true:this.permitted=false;
            if(this.permitted===true && this.active===true) return true; else return false;
        }
    }
}
</script>