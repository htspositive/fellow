<template>
    <div >
<ul class="M-Li">
    <li class="Li" v-for="obj in Mlist" :key="obj.id" @click="goDetail(obj.id)">
        <img :src="obj.images.medium" alt="">
        <div class="M-div">
            <h3>{{obj.original_title}}</h3>
                <div>
                    <span v-for="cast in obj.casts" :key="cast.id">{{cast.name}}|</span>
                </div>
                    <span >播放数量:{{obj.collect_count}}</span>
                    <p>上映时间：{{obj.mainland_pubdate}}</p>
                    <p>
                        <span v-for="(genre,index) in obj.genres" :key="index">{{genre}}</span>
                    </p>
        </div>
    </li>
</ul>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data(){
            return{
                Mlist:[]
            }
        },
        created(){
            axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10')
            .then((res)=>{
                this.Mlist=res.data.subjects;
            }).catch((res)=>{
                console.log(res)
            })
        },
        methods:{
            goDetail(id){
                this.$router.push({path:'/JamesDetail',query:{id}})
            }
        }
    }
</script>

<style lang="scss" scoped>
.M-Li{
    padding:0.2rem;
}
.Li{
    display: flex;
    color: #000 ;
    margin-bottom: 0.2rem;
}
.M-div{
    flex:1;
}
.Li img{
        width:1.8rem;
        height:2.46rem;
        margin-right: 0.2rem;
    }
</style>