<template>
    <div class="category__item">
        <slot></slot>
    </div>
</template>

<script>

    export default {
       name: 'category-menubar'

    }
</script>

<style scoped>
    .category__item{
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        padding: 5px;
        min-width: 50px;
        text-align: center;
        border-radius: 10px;
        /* background-color: #8080ff; */
        margin: 5px 10px;
        cursor: pointer;
    }
    .category__item:hover{
        color: rgb(235, 224, 184);
    }
</style>