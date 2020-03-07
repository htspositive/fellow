<template>
    <div>
        <div v-if="showMoive">
            <div class="M-detail-div">
                <img :src="movie.images.medium" alt="">
            <div class="M-detail-text">
                <h5>{{movie.original_title}}</h5>
                <p>上映时间{{movie.pubdate}}</p>
                <p>时长{{movie.durations[0]}}</p>
                <p></p>
            </div>   
            </div>
            <div class="summary">
                {{movie.summary}}
            </div>
        </div>
    <img class="loading" v-if="isShow" src="../assets/images/loading.gif" alt />
        
    </div>
</template>

<script>
import axios from 'axios'
    export default {
         data(){
            return {
                movie:{},
                isShow: true,
                showMoive:false
            }
        },
        created(){
            axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/subject/'+this.$route.query.id)
            .then(res=>{
                this.movie = res.data;
                 this.isShow = false;
                 this.showMoive = true;
            }).catch(res=>{
                console.log(res)
            })
        } 
    }
</script>

<style lang="scss" scoped>
.M-detail-div{
    display: flex;
}
.M-detail-div img{
    width: 3rem;
}
.M-detail-text{
    flex:1 ;
    margin-left: 0.5rem;
}
.loading {
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // width:6rem;
  width: 1rem;
}
</style>