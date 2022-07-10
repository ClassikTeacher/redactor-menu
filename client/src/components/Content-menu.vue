<template>
    <div class="container-content">
        <MenuItem
            v-for="item in menu"
            :key="item.id"
            :image="item.pic"
            :item="item"
            @show="showModal"
        >
            <template v-slot:name>{{item.name}}</template>
            <template v-slot:discription>{{item.description}}</template>
            <template v-slot:price>{{`${item.price}$`}}</template>
            <template v-slot:images></template>
        </MenuItem>
        
   
       
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
    export default {
    components: { MenuItem },
    props: {
        menu:{
            type: Array
        }
    },
    methods: {
        showModal(event){
            this.$emit('show', event)
        }
        
    }
}
</script>

<style scoped>
    .container-content{
        width: 100%;
        max-height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        overflow-y: auto;
         padding: 20px 20px 0px;
    }
</style>