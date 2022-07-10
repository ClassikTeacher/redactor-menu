<template>
    <div class="modal" v-if="$store.state.showModal" @click="$store.commit('invisibleModal')">
        <div @click.stop class="modal-form">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modal-form',

        props:{
            show: {
                type: Boolean,
                default: true
            },
            categories: {
                type: Array
            }
        },
        data(){
            return{

            }
        },
      methods:{
        hideModal(){
            // this.$emit('update:show', false)
            
        }
      }
        
    }
</script>

<style scoped>
    .modal{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }
    .modal-form{
        margin: auto;
        background: #fff;
        border-radius: 15px;
        padding: 10px 15px;
        width: 600px;
        min-height: 80px;
    }
</style>