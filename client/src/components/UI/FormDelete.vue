<template>
        <form @submit.prevent>
            <h2>Удалить элемент меню?</h2>
            <button :style="{color: 'red'}" @click="deleteItem">Удалить</button>
            <button @click="closeModal">отмена</button>
        </form>
</template>

<script>
import MenuService from '@/service/MenuSrvice'

    export default {
        name: 'form-delete',
        props:{
            idItem: {
                type: Number,
            }
        },
    
    data() {
        return {
               
        }
    },
    methods:{
        async deleteItem(){
            const response = await MenuService.deleteMenuItem(this.idItem)
            if(response){
                this.$emit('deleteItemMenu', response.data.id)
                this.$store.commit('invisibleModal')
            }
            console.log(response)

        },
        closeModal(){
            this.$store.commit('invisibleModal')
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