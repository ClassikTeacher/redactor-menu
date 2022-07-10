<template>
    <div class="container">
        <modal-form  :categories="categories">
            <form-menu @addMenu="fetchMenu" :categories="categories" v-if="typeModal==='menu'"></form-menu>
            <form-category v-if="typeModal==='category'"></form-category>
            <form-delete @deleteItemMenu="deleteItemMenu" :idItem="typeModal[1]" v-if="typeModal[0]==='delete'"></form-delete>
            <form-editMenu @editMenu="fetchMenu" :categories="categories" :itemMenu="typeModal[1]" v-if="typeModal[0]==='editMenu'"></form-editMenu>
        </modal-form>
        <NavbarMenu
            @show="showModal"
          
            v-model="categories"
            :categories="categories"
        />
        <ContentMenu
        @show="showModal"
        :menu="menuItems"
        />
    </div>
</template>

<script>
import NavbarMenu from '@/components/Navbar-menu.vue'
import MenuService from '@/service/MenuSrvice'
import ContentMenu from '../components/Content-menu.vue'
    export default {
    components: { NavbarMenu, ContentMenu },
    data() {
        return{
            categories: [
                
            ],
            menuItems: [

            ],
            sorted: '' ,
            typeModal:'',
        }
    },
    methods: {
        showModal(event){
            console.log(event)
            this.typeModal = event
        },
        async fetchMenu() {
            try{
                const response = await MenuService.fetchMenu()
                this.categories = response.data[0]
                this.menuItems = response.data[1]
                console.log(response)
                console.log(this.categories)
                console.log(this.menuItems)
            } catch (e) {
                console.log(e)
            }
        },
        addItemMenu(event){
            this.menuItems.push(event)
        },
        deleteItemMenu(event){
            
            const newMenu = this.menuItems.filter( item => item.id !== event)
            this.menuItems = [...newMenu]
        }
       
    },
     mounted() {
              this.fetchMenu()
    },
    watch:{
       
    }
}
</script>

<style scoped>
.container{
  position: relative;
  width: 100%;
  min-height: 100%;
  background-color: #eee;
  display: flex;
  flex-direction: column;
 
 
}
</style> 