<template>
        <form @submit.prevent>
            <my-input
                v-model:modelValue="nameCategory"
                type="text"
                placeholder="Название"
            ></my-input>
            <button @click="createCategory">Создать</button>
        </form>
</template>

<script>
import MenuService from '@/service/MenuSrvice'

    export default {
        name: 'form-category',
    
    data() {
        return {
            nameCategory: ''    
        }
    },
    methods:{
        async createCategory(){
            if(this.nameCategory){
                const response = await MenuService.createCategory(this.nameCategory)
                console.log(response)
                if(response){
                     this.$store.commit('invisibleModal')
                }
            }

        }
    }
}
</script>

<style scoped>
    form{
        position: relative;
        padding: 10px;
        border: 2px solid rebeccapurple;
        margin: 20px 10px;
        display: flex;
        flex-direction: column;
    }
    button{
        position: relative;
        left: 85%;
        background: none;
        margin: 0;
        font-size: 16px;
        width: 80px;
        padding: 5px;
        margin-top: 20px;
        border: 2px solid rebeccapurple;
        cursor: pointer;
    }
    button:hover{
        background: #eee ;
    }
</style>