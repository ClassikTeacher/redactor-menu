<template>
    <div class="menuItem">
        <div class="nameItem">
            <slot name="name"></slot>
        </div>
        <div class="discription">
            <slot name="discription"></slot>
        </div>
        <div class="price">
            <slot name="price"></slot>
        </div>
        <div class="images">
            <img v-if="image" width="180" height="180"  :src=path alt="PciterMenu"/>
            <img v-else width="180" height="180"  src=https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg  alt="PciterMenu"/>
        </div>
        <div class="btn-item">
            
        <div @click="callEditItem" class="edit">
            <ion-icon name="create-outline"></ion-icon>
        </div>
        <div @click="callDeleteItem" class="delete">
            <ion-icon name="trash-outline"></ion-icon>
        </div>
        </div>
        
    </div>
</template>

<script>
import {API_URL} from '@/config'


    export default {
        name: 'menu-item',

    props: {
        image:{
            type: String
        },
        item: {
            type: Object
        }

    },
    data(){
        return{
          path: ``
        }
        
    },
    methods: {
        getPathPicter(){
            this.path = API_URL + this.image
        },
       
        callDeleteItem(){
            this.$emit('show', ['delete', this.item.id])
            this.$store.commit('visibleModal')
        },

        callEditItem(){
            console.log(this.item)
            this.$emit('show', ['editMenu', this.item])
            this.$store.commit('visibleModal')
        }
    },

    mounted(){
        this.getPathPicter()
    }
    

        
    }
</script>

<style  scoped>
.menuItem{
        /* display: flex; */
        position: relative;
        width: 45%;
        height: 180px;
        background-color: #ccc; 
        overflow: hidden;
        padding: 5px 10px;
        border-radius: 10px;
        margin: 0 2.5% 0 2.5%;
        margin-bottom: 20px;
    }
.nameItem{
        position: relative;
        font-size: 26px;
        font-weight: 600;
        width: 250px;
        text-align: center;
        color: #444;
        overflow: hidden;
        margin: 0 0 0 30px;
    }
.discription{
    width: 250px;
    max-height: 100px;
    margin: 10px 0 0 10px;
    overflow: hidden;
    word-wrap: break-word;
    font-size: 18px;
    font-weight: 400;

}
.price{
    position: absolute;
    bottom: 0;
    right: 38%;
    padding-bottom: 5px;
    font-size: 22px;
    font-weight: 400;
}
.images{
        width: 180px;
        height: 180px;
        position: absolute;
        right: 0;
        top: 0;
        overflow: hidden;
        border-radius: 10px;
        background-color: antiquewhite;
    }
.btn-item{
    position: absolute;
    display: flex;
    left: 20px;
    bottom: 0;
    font-size: 20px;
}
.btn-item .delete,
.btn-item .edit{
    cursor: pointer;
    padding: 2px 2px;
    margin-right: 10px;
}
</style>