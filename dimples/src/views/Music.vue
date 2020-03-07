<template>
    <div>
        <img v-for="obj in WadeList" :key="obj.id" :src="obj.bg" @click="$router.push({path:'/MusicDetail',query:{id}})" alt="">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
       data(){
            return {
               WadeList:[]
            }
        },
        created(){
            axios.get('data/musiclist.json')
            .then((res)=>{
                this.WadeList = res.data.albums;
            }).catch((res)=>{
                // console.log(res);
            })
        }
    }
</script>

<style lang="scss" scoped>
img{
        width:50%;
        float: left;
    }
</style>