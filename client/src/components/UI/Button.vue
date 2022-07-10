<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button' 
    }
</script>

<style scoped>
    .btn{
        background: none;
        padding: 10px 15px;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 10px;
        margin: 5px;
        cursor: pointer;
    }
    .btn:hover{
        color: #7c8dff;
        border: 1px solid #7c8dff;
    }
</style>