<template>
    <footer :style="{background:$store.state.color}">
    <router-link 
        v-for="(obj,index) in menu" 
        :key="index"
        :to="obj.path"
        @click.native="$store.commit('change',obj)">
        {{obj.title}}
    </router-link>
    </footer>
</template>

<script>
    export default {
    data(){
        return{
          menu:[
              {
                  title:"音乐",
                  color:'red',
                  path:'/music'
              },
              {
                  title:"科比",
                  color:'yellow',
                  path:'/kobe'
              },
              {
                  title:"电影",
                  color:'orange',
                  path:'/movies'
              },
              {
                  title:"哈登",
                  color:'blue',
                  path:'/harden'
              },
          ]
        }
    },
    created(){
        this.menu.forEach((obj,index) => {
        if(this.$route.path==obj.path){
            this.$store.commit('change',obj)
        }
        });
    }
}
</script>

<style lang="scss" scoped>
footer{
    background: red;
    position: fixed;
    bottom: 0px;
    height: 1rem;
    width: 100%;
    text-align: center;
    line-height: 1rem;
    display: flex;
    a{ 
        font-size: 14px;
        flex: 1;
    }
    .router-link-active{
        color:#fff;
        text-decoration: none;
    }
}

</style>