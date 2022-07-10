<template>
    <div class="navbar">
        <div 
        class="wrapper-category"
        
        >

            <Category
          
            v-for="category in categories"
            :key="category.id"
            >
            {{category.name}}
            </Category>
            
           
           
            </div>
        <div class="wrapper-btn">
            <my-button @click="modalCategory">Создать категорию</my-button>
            <my-button @click="modalMenuItem">Добавить позицию</my-button>
            </div>
        
    </div>
</template>

<script>
import Category from './Category.vue';


    export default {
    components: { Category },
    props: {

        categories: {
            type: Array,

        },
    data() {
        return {
           
        }
    },
    },
    methods: {
        modalCategory(){
            this.$emit('show', 'category')
            this.$store.commit('visibleModal')
        },
        modalMenuItem(){
            this.$emit('show', 'menu')
            this.$store.commit('visibleModal')
        },
      
    

    },

   

}
</script>

<style scoped>
    .navbar{
        min-width: 100%;
        height: 120px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #41005a;
    }
    .wrapper-btn{
        padding: 20px 10px;
        width: 20%;
        display: flex;
        flex-direction: column;
    }
    .wrapper-category{
        display: flex;
        max-width: 80%;
        height: 100%;
        flex-wrap: wrap;
        align-items: flex-end;
        padding: 10px;
    }
    .selectedCategory{
        color:aqua;
    }
</style>