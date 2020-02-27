<template>
    <div>
<button @click="$store.commit('add',5)">count add</button>
<button @click="reduce">reduce add</button>
<button @click="addAction">触发addaction</button>

<div>{{$store.state.count}}</div>

<div>通过取值:{{count}}</div>

<div>{{xx}}</div>
    
    </div>
</template>
<script>
import {mapState,mapMutations, mapGetters, mapActions} from "vuex";
    export default {
       computed:{
           ...mapState(["count","num"]),
           ...mapGetters(["xx"])
       },
       methods:{
           ...mapMutations(["add","reduce"]),
           ...mapActions(["addAction"])
       }
    }
</script>

<style lang="scss" scoped>

</style>