<template>
  <div>
    <div class="video-wrapper">
      <video playsinline autoplay muted loop poster="\img\screen1.png">
        <source src="\video\main-bg.mp4" type="video/webm">
        Your browser does not support the video tag.
      </video>
      <div class="overlay"></div>
      <div class="title-container">
        <div class="title">
          <h1>Всё об игре Deadlock</h1>
        </div>
        <div class="disc-title">
          <p>от новостей до сборок на героев</p>
        </div>
      </div>
    </div>
    <div class="update-title-container">
      <div class="update-title">
        <p>ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</p>
      </div>
      <div class="update-link">
        <p>
          <NuxtLink to="/news">ПОСМОТРЕТЬ ВСЕ <img src="\img\Arrow 1.png"></NuxtLink>
        </p>
      </div>
    </div>
    <div v-if="!arr_data"><Loader></Loader></div>
    <div class="update-container" v-else >
      <UpdateCard :card-info="imgList" :date-inf="arr_data" />
    </div>
    <div class="about-site">
      <div class="title-container">
        <div class="title">
          <h1>Deadlock</h1>
        </div>
        <div class="disc-title">
          <p>компьютерная игра в жанре<br> командного шутера от<br> третьего лица</p>
        </div>
      </div>
    </div>
    <div class="body">

      <div class="heading">
        <h1 class="txt">Лучшие герои для новичков</h1>
      </div>
      <div class="description">
        <div class="descriptionall">
          <div class="descriptionh2">
            <h2 class="txt">АБРАМС</h2>
            <h3>Рвется в ближний бой</h3>
          </div>
          <div class="descriptionp">
            <p>Сила и выносливость Абрамса
              позволяют ему сражаться в
              первых рядах - он часто налетает
              прямо на врагов заставляя их
              бросаться в бегство.
              Если враги сосредотачиваются на Абрамсе,
              его союзники на задней линии могут
              безнаказанно вести по ним огонь.</p>
          </div>
        </div>
        <div class="photo">
          <img src="../img/abrams.png">
        </div>
      </div>
      <div class="button">
        <NuxtLink class="knopka" to="heroes" style="color: aliceblue;">ВСЕ ГЕРОИ</NuxtLink>
      </div>

    </div>
  </div>
</template>
<script >
import { useNewsStore } from "../../store/index"
const newsStore = useNewsStore();
export default {
  data(){
    return{
      url:'http://127.0.0.1:8081',
      arr_data:null,
      imgList:['image/image 3.svg',
      'image/image 2.png',
      'image/image 1 (1).png'],
      dateList:['02.10.2024','29.09.2024','26.09.2024']
    }
  },
  mounted(){
    if (newsStore.news.length == 0) {
            this.getNews();
        }
    else{
            this.arr_data=newsStore.news[0];
        }
  },
  methods:{
    getNews(){
            fetch(this.url)
            .then((res)=>res.json())
            .then((json)=>{
                let strJson=JSON.stringify(json);
                let jsonArray = JSON.parse(strJson);
                this.arr_data=jsonArray.slice(0,4);
                newsStore.getNews(jsonArray);
            });
        },
  }
}
</script>
<style>
@font-face {
    font-family: 'Playfair Display';
    src:local('Playfair Display'),
     url('../fonts/PlayfairDisplay-Bold.ttf');
     font-variant-numeric: lining-nums;
     font-weight: 600;
}
@font-face {
    font-family: 'Playfair Display';
    src:local('Playfair Display'),
     url('../fonts/PlayfairDisplay-Regular.ttf');
     font-variant-numeric: lining-nums;
     font-weight: 300;
}
@font-face {
  font-family:'Montserrat' ;
  src: url('../fonts/PlayfairDisplay-Bold.ttf');
  font-weight: 300;
  unicode-range: U+30-39;
}
@font-face {
    font-family: 'Montserrat';
    src:url('../fonts/Montserrat-Regular.ttf');
    unicode-range: U+0-2f, U+40-10FFFF;

}
@font-face {
    font-family: 'Montserrat';
    src:url('../fonts/Montserrat-ExtraBold.ttf');
    font-weight: 800;
    unicode-range: U+0-2f, U+40-10FFFF;

}
@font-face {
    font-family: 'Montserrat';
    src:url('../fonts/Montserrat-SemiBold.ttf');
    font-weight: 600;
    unicode-range: U+0-2f, U+40-10FFFF;

}
@font-face {
    font-family: 'Montserrat';
    src:url('../fonts/Montserrat-Medium.ttf');
    font-weight: 500;
    unicode-range: U+0-2f, U+40-10FFFF;

}
@font-face {
    font-family: 'Montserrat';
    src:url('../fonts/Montserrat-Light.ttf');
    font-weight: 300;
    unicode-range: U+0-2f, U+40-10FFFF;

}
@keyframes link-news {
  from {
    letter-spacing:0.1em;
  }
  25%{
    letter-spacing:0.15em;
  }
  50% {

    letter-spacing:0.2em;
  }
  to {

    letter-spacing:0.25em;
  }
}
@keyframes link-news-start {
  from {
    letter-spacing:0.15em;
  }
  25%{
    letter-spacing:0.1em;
  }
  50% {

    letter-spacing:0.05em;
  }
  to {

    letter-spacing:0em;
  }
}
html,body{margin: 0;padding: 0;height: 100%;width: auto;}
body{background-color: black;}

.body{
  margin: 0%;
  padding: 0%;
  background: linear-gradient(to bottom,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 5%,rgba(0,0,0,0) 57%,rgba(0,0,0,1) 95%,rgba(0,0,0,1) 100%),url(../img/b88026b942e62f6bfee8bc2ff570ef11.png); background-position: center center;  background-size:cover;
height: 100vh;
width: 100%;
}
h1{
  color: white;
}

div.photo img{
  width: 60%;

}


.descriptionh2 h2{
  font-size: 2rem;
  font-weight: 500;
  padding:1%;
  margin: 0 auto;
}
.descriptionh2 h3{
margin: 0 auto;
font-size: 1.5rem;
padding-bottom: 3%;
font-family: 'Montserrat';
font-weight: 500;
}
.descriptionp p{
  margin: 0 auto;
  font-size: 1.3rem;
  padding: auto;
  font-family: 'Montserrat';
}
.heading{
  padding-right: 10%;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-end;
  padding-top: 0%;
}
.description{
  display: flex;
  width: 90%;
  margin: 0px auto;
  flex-wrap:wrap-reverse;
  color: white;


}
.descriptionh2{
  padding-top: 2.5%;
  width: 90%;
  
}
.descriptionall{
  flex-direction: column;
  width: 40%;
  justify-content: center;
}
.descriptionp{
  width: 90%;
  height: 20vh;
}
.photo{
  width: 50%;
justify-content: center;

}
.button{
      width: auto;
      max-height: 100%;
      display: flex;
  justify-content: center;
  text-align: center;
  color: aliceblue;
background: none;
}
.knopka{
       padding: 1%;
       width: max-content;
       height: 5vh;
       border: 1px solid white; 
       border-radius: 5px;
       font-size: 1.6rem;
       font-family: 'Playfair Display';
}

.txt{
    font-family: 'Playfair Display';
}

.about-site{width: 100%;background: linear-gradient(to bottom,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 5%,rgba(0,0,0,0) 57%,rgba(0,0,0,1) 95%,rgba(0,0,0,1) 100%),url("../img/screen2.png"); height: 90vh;
background-position: center center;background-repeat: no-repeat;  background-size: cover;
display: flex;justify-content: center;flex-direction: column;}
.update-link p a{text-decoration: none;color:#D9D9D9;animation-name: link-news-start;animation-duration: 0.3s;}
.update-link p a:hover{color: white;animation-name: link-news;animation-duration: 0.3s;animation-fill-mode: forwards;}
.update-link p a:hover img {content: url("../img/ArrowActive.png");}
video{object-fit: cover;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,  rgba(0,0,0,0.29) 0%,rgba(0,0,0,1) 91%,rgba(0,0,0,1) 97%);

  z-index: -1;
}
.video-wrapper {
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:center;
  position: relative;
  width: 100%;
  height:90vh ;
  overflow: hidden;
  margin-bottom: -120px;
}
.update-container{position: relative;display: flex;width: 100%;height: 25vh;justify-content: center;margin: 0 auto;gap:5%;flex-wrap: wrap;}
.title-container{padding-left: 8.5%;height: 60%;}
.title{color: white;font-family:Playfair Display;}
.title h1 {font-size: 3rem;}
.disc-title{color: white;
  font-size: 2rem;font-family: Montserrat;}
.update-title-container{display: flex;justify-content: flex-start;padding-left: 9%;}
.update-title{
  font-family:Montserrat;font-weight: 600;color: white;
}
.update-link{font-family:Montserrat;color: white;padding-left: 0.5%; z-index: 0;}

@media(max-width:1000px){
  .descriptionall{
    width: 40%;
  }
}
@media(max-width:950px){
  .body{
    height: auto;
  }
  .descriptionall{
  width: 100%;
}
.heading h1{
  font-size: 32px;
  margin: 0;
  padding-top: 100px;
}
.photo{
  margin: 0 auto;
}
}
@media(max-width:480px){
  .body{
    height: auto;
  }
  .descriptionall{
  width: 100%;
}
.heading{
  padding-right: 0%;
  padding-left: 2.5%;
}
.heading h1{
  font-size: 32px;
}
.descriptionh2 h2{
  font-size: 1.5rem;
}
.descriptionp p{
  font-size: 1rem;
}
.photo{
  width: auto;
  margin: 0 auto;
}
.button{
  padding: 40px 0 40px 0;
}
.knopka{
  width: 40vw;
}
}

@media (max-width:1850px){.about-site{margin-top: 60vh;}
.update-container{max-width: 500px;}}
@media (max-width:1024px){.about-site{margin-top: 60vh;}
.update-container{width: 90%;}}
@media (max-width:640px){
  video{
    height: 70vh;
  }
  .video-wrapper{
    height: 70vh;
  }
  .about-site{height: 70vh;}
  .title h1 {font-size: 1.5rem;}
  .disc-title{color: white;
    font-size: 1rem}
  .update-title{font-size: 0.8rem;
}
  .update-link{font-size: 0.8rem;}
}
</style>
