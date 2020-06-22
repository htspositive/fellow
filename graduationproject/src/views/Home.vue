<template>
    <div id="homediv">
        <div id="activehome">
            <h3 id="activetitle">活动头条 Headlines</h3>
        </div>
        <div id="activeimg">
        <Swipe :imgs="imgs"></Swipe>
        </div>
    </div>
</template>

<script>
import Swipe from '../components/Swipe'
    export default {
       data(){
            return {
                imgs:[
                    "http://zy.dbw.cn/UploadFiles/202002/04/428688981111.jpg",
                    "http://zy.dbw.cn/UploadFiles/202002/03/341929991855.jpg",
                    "http://zy.dbw.cn/UploadFiles/202003/06/080636471448.jpg",
                    "http://zy.dbw.cn/UploadFiles/202003/06/088849768131.png",
                    "http://zy.dbw.cn/UploadFiles/202003/27/903066937600.png"
                ],
            }
        },
        components:{
            Swipe
        }
    }
</script>

<style lang="scss" scoped>
#activeimg{
    width: 680px;
}
#homediv{
    width: 1200px;
    margin: 20px auto;
    overflow: hidden;
}
#activehome{
    height: 40px;
    margin-bottom: 10px;
    border-bottom: 2px solid #da1d1d;
}
#activetitle{
        width: 200px;
        font-family: "微软雅黑";
        padding: 0 10px;
        font-size: 20px;
        font-weight: normal;
        display: block;
        text-align: center;
        line-height: 42px;
        height: 40px;
        color: #ffff;
        background:#da1d1d ;

}
</style>