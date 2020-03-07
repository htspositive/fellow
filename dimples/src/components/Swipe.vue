<template>
    <div>
        <transition-group tag="ul" name="change" class="swipe-box">
                <li class="swipe-list" v-for="(img,index) in imgs" :key="index" v-show="index==iNow">    
                    <img :src="img" alt="">
                </li>
        </transition-group>
        
        <ul class="btns-box">
            <li :class="{btns:true,active:iNow==index}" v-for="(img,index) in imgs" :key="index">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {iNow:0}
        },
         props:["imgs"],
        created(){
            setInterval(()=>{
                this.iNow++;
                if(this.iNow==this.imgs.length){
                    this.iNow=0;
                }
            },2000)
        }
    }
</script>

<style lang="scss" scoped>
.swipe-box{
        height:5rem;
        position: relative;
        .swipe-list{
            position: absolute;
            left:0px;
            top:0px;
            width:100%;
            height: 5rem;
            img{
                width:100%;
                height:5rem;
            }
        }
    }
    .btns-box{
        display: flex;
        justify-content: center;
        .btns{
            width:0.2rem;
            height:0.2rem;
            margin:0.1rem;
            background: #ccc;
            border-radius: 50%;
            
        }
        .active{
            background: #000;
        }
    }
    .change-enter{
        transform: translate(-100%);
    }
    .change-enter-active{
        transition: transform 1s linear;
    }
    .change-enter-to{
        transform: translate(0%);
    }
    .change-leave{
        transform: translate(0%);
    }
    .change-leave-active{
        transition: transform 1s linear;
    }
    .change-leave-to{
        transform: translate(100%);
    }
</style>