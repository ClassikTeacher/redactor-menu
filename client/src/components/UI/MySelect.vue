<template>
    <select :value="modelValue" @change="changeCategory">
        <option disabled value="">Выберите категорию</option>
        <option 
        v-for="category in categories" 
        :key="category.id" 
        :value="category.id">{{category.name}}</option>
    </select>
</template>

<script>
    export default {
        name: 'my-select',
        props: {
            modelValue: {
                type: String
            },
            categories: {
                type: Array,
                default: () => []
            },
            category:{
                type: String
            }
        },
        methods: {
            changeCategory(event){
                this.$emit('update:modelValue', event.target.value)
            },
            fetchCategory(){
                if(this.category){
                    this.$emit('update:modelValue', this.category)
                }
            }
        },
        mounted(){
            this.fetchCategory()
        }
    }
</script>

<style scoped>
select{
    width: 180px;
    height: 30px;
    padding: 5px;
    margin: 5px 10px 10px 0; 
}
    

</style>