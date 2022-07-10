<template>
        <form @submit.prevent>
            <my-input
                v-model:modelValue="menu.name"
                type="text"
                placeholder="Название"
            />
            <my-input
            v-model:modelValue="menu.description"
                type="text"
                placeholder="Описание"
            />
            <my-select 
                v-model="menu.category"
                :categories="categories"
            />
            <my-input
                v-model:modelValue="menu.price"
                type="text"
                placeholder="цена"
            />
            <input type="file" name='file' accept="image/*" @change="changePic" />
            <button @click="saveItemMenu">Создать</button>
        </form>
</template>

<script>
import MenuService from '@/service/MenuSrvice'

    export default {
        name: 'form-menu',
        props :{
            categories: {
                type: Array
            },
           
        },
        data(){
            return{
                menu: {
                    name:'',
                    description: '',
                    price: '',
                    pic: '',
                    category: ''
                },
            
            }
        },
        methods:{
            async changePic(event){
                const file = event.target.files[0]
                if(this.menu.pic){
                    await MenuService.deleteLocalPicter(this.menu.pic)
                }
                const pathPciter = await MenuService.addMenuPicter(file)
                this.menu.pic = pathPciter.data
                console.log(pathPciter.data)
                
            },
           
            async saveItemMenu(){
                if(this.menu.name && this.menu.category && this.menu.price){
                    const newItemMenu = await MenuService.createMenuItem(this.menu.name, this.menu.description, this.menu.category, this.menu.price, this.menu.pic)
                    console.log(newItemMenu)
                   
                    if(newItemMenu){
                        this.hideModal()
                        this.$emit('addMenu', this.menu)
                    }
                } else {
                    console.log('не заполнены обязательыне поля')
                }

            },
            hideModal(){
            this.$store.commit('invisibleModal')
            
        }   
        },
        mounted(){
           
        },
        computed:{
            
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