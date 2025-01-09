<template>
    <div>
        <div class="news-title">
            <div class="news-title__back-news">
                <img src="../../img/image 11.png">
                <img class="center-image" src="../../img/image 10.png">
                <img src="../../img/image 9.png">
            </div>
            <p v-if="!arr_json"></p>
            <div v-else>
            <div class="news-title__date">
                <h2>{{arr_json[0].date}}</h2>
                <p>ПОСЛЕДНЯЯ НОВОСТЬ</p>
            </div>
            <div class="news-title__last ">
                <h2 class="title news-title__title">{{arr_json[0].title}}</h2>
            </div>
            <div class="news-title__last-link update-link">
                <p class="last-link">
                    <NuxtLink :to="`/news/post/${arr_json[0].id}`">ПОДРОБНЕЕ <img src="\img\Arrow 1.png"></NuxtLink>
                </p>
            </div>
        </div>
        </div>
        <div class="all-news">
            <div class="all-news__container-title">
            <h1 class="all-title all-news__title">ВСЕ НОВОСТИ</h1>
            </div>
            <div v-if="!arr_json"><Loader /></div>
            <div class="all-news__container-wrapper">
            <div class="all-news__news-container">
                <NewsCard v-for="item of news " :news-data="item" />
            </div>
            </div>
            <div class="all-news__pag-container">
                <div class="all-news__but-container " v-for="item of count_pages" :class="{active:current_page==item}"><button @click="current_page=item;Pagination(arr_json,current_page)">{{ item }}</button></div>
                <div class="all-news__but-container " v-if="current_page<count_pages"><button @click="current_page++;Pagination(arr_json,current_page)">></button></div>
            </div>
        </div>
    </div>
</template>
<style>
div.all-news__pag-container div:last-child{padding-right: 0px;}
.all-news h1 {margin: 0;}
.all-news__but-container{padding-right: 19px;}
.all-news__pag-container{display: flex; justify-content: center;padding-bottom: 48px;}
.all-news__but-container.active button{
    background-color: #EFDFBC;
    color: #211F20;
}
.all-news__but-container button {
    background-color: #000000;
    border: 1px solid rgba(239, 239, 239, 0.6);
    border-radius: 10px;
    color: #fff;
    font-family: Playfair Display;
    font-variant-numeric: lining-nums;
    font-size: 1.25rem;
    width: 30px;
    height: 30px;
font-weight: 300;}
.all-news__news-container{display: flex;max-width:1158px;margin: 0 auto;justify-content:flex-start; flex-wrap: wrap;}
.all-news__container-title{width: 85%;margin: 0 auto;display: flex;justify-content: flex-end;}
.all-news__title{padding: 16px 0 0 0;}
.all-news {background: #040404;}
.all-title{font-family: Playfair Display;font-size: 3rem;color: white;font-weight: 300;}
.last-link{padding-top: 7px;padding-bottom: 11px;}
div.news-title__last-link{width: 85%;margin: 0 auto;padding-left: 0px;}
.news-title__last-link p{margin: 0;}
.news-title__title{padding-top: 8px;}
.title{font-family: Playfair Display;color: white;font-weight: 300;font-size: 3rem;margin: 0;}
.news-title__last{max-width: 85%;margin: 0 auto;}
.news-title__date p{font-weight: 600;font-size: 1rem;background: rgba(255,255,255,0.35);margin: 0;}
.news-title__date span{font-family: Playfair Display;font-variant-numeric: lining-nums;}
.news-title__date{color: white;font-family: Montserrat; display: flex;align-items: center;max-width:85%;margin: 0 auto;justify-content: space-between;}
.news-title__date h2{font-weight: 300; font-size: 1.5rem;margin: 0;font-variant-numeric: lining-nums;}
img.center-image{max-height: 214px;padding-bottom: 30px;}
.news-title__back-news img{width: 30%;max-width: 256px;object-fit: contain;}
.news-title__back-news{max-width: 85%;padding-top: 75px;margin: 0 auto; background: url('../../img/d37cb6f211d4240da045d2b25a9d48d5 1.png') no-repeat;display: flex;justify-content: space-between;background-position:center 10vh;background-size: auto;height: 488px;}
@media screen and (max-width:555px) {
    .all-title{font-size: 2rem;}
    .title{font-size: 2rem;}
    .news-title__date h2{font-size: 1.2rem;}
}
@media screen and (max-width:1400px) {
    .all-news__news-container{max-width: 772px;}
    
}
@media screen and (max-width:772px) {
    .all-news__news-container{max-width: 97%;}
    
}
@media screen and (max-width:692px){div.all-news__news-container{max-width: 84%;display: inline-flex;justify-content: space-between;}
.all-news__container-wrapper{
    display: flex;justify-content: center;
}}
</style>
<script>
import { useNewsStore } from "../../store/index"
const newsStore = useNewsStore();
export default{
    data(){
        return{
            url:'http://127.0.0.1:8081',
            arr_json:null,
            count_pages:0,
            current_page:1,
            news:null
        }
    },
    mounted(){
        newsStore.initializeNews()
        if (newsStore.news.length == 0) {
            this.getNews();
            const data= newsStore.news
            console.log(data)
        }
        else{
            this.Pagination(newsStore.news[0],this.current_page);
            this.arr_json=newsStore.news[0];
            this.count_pages=Math.ceil(newsStore.news[0].length/3);
        }
    },
    methods:{
        getNews(){
            fetch(this.url)
            .then((res)=>res.json())
            .then((json)=>{
                let strJson=JSON.stringify(json);
                let jsonArray = JSON.parse(strJson);
                this.arr_json=jsonArray;
                this.count_pages=Math.ceil(jsonArray.length/2);
                this.Pagination(jsonArray,this.current_page);
            });
        },
        Pagination(array, currentPage, pageSize = 3) {
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            this.news=array.slice(startIndex, endIndex);
            newsStore.getNews(array)
        }
    }
}
</script>