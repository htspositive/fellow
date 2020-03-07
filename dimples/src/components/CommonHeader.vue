<template>
    <header :style="{background:$store.state.color}">
    {{$store.state.title}}
    </header>
</template>

<script>
    export default {
    
    }
</script>

<style lang="scss" scoped>
    header{
       background: red;
       position: fixed;
       top:0;
       height: 1rem;
       width: 100%;
       text-align: center;
       line-height: 1rem;
       font-size: 16px;
    }
</style>