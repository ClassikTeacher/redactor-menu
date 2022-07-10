<template>
        <form @submit.prevent>
            <h3>edit</h3>
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
                v-model:modelValue="menu.category"
                :category="this.menu.category"
                :categories="categories"
            />

            <my-input
                v-model:modelValue="menu.price"
                type="text"
                placeholder="цена"
            />
            <div class="imege-container">
                <input type="file" name='file' accept="image/*" @change="changePic" />
                <img v-if="this.menu.pic" width="40" height="40"  :src=path alt="PciterMenu"/>
                <img v-else width="180" height="180"  src=https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg  alt="PciterMenu"/>

            </div>
            
            <button @click="editItemMenu">Изменить</button>
        </form>
</template>

<script>
import MenuService from '@/service/MenuSrvice'
import {API_URL} from '@/config'
    export default {
        name: 'form-editMenu',
        props :{
            itemMenu: {
                type: Object
            },
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
                path: ``,
                id: Number
            }
        },
        methods:{
            createItemMenu(){
                console.log(this.itemMenu)
                this.menu.name = this.itemMenu.name
                this.menu.description =  this.itemMenu.description
                this.menu.price = this.itemMenu.price
                this.menu.pic = this.itemMenu.pic
                this.menu.category = this.itemMenu.category_id
                this.id = this.itemMenu.id
            },
            getPathPicter(){
            this.path = API_URL + this.menu.pic
        },
            async changePic(event){
                const file = event.target.files[0]
                if(this.menu.pic){
                    await MenuService.deleteLocalPicter(this.menu.pic)
                }
                const pathPciter = await MenuService.addMenuPicter(file)
                this.menu.pic = pathPciter.data
                console.log(pathPciter.data)
                
            },
           
            async editItemMenu(){
                if(this.menu.name && this.menu.category && this.menu.price){
                    const newItemMenu = await MenuService.updateMenuItem(this.id,this.menu.name, this.menu.description, this.menu.category, this.menu.price, this.menu.pic)
                    console.log(newItemMenu)
                   
                    if(newItemMenu){
                        this.hideModal()
                        this.$emit('editMenu', this.menu)
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
        this.createItemMenu()
        this.getPathPicter()
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
    .imege-container{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
</style>