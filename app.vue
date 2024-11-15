<script setup lang="js">

useSeoMeta({
  title: 'Deadlockbase - всё об игре Deadlock',
  ogTitle: 'Deadlockbase - всё об игре Deadlock',
  description: 'Новости, гайды на героев и многое другое по игре Deadlock.',
  ogDescription: 'Новости, гайды на героев и многое другое по игре Deadlock.',
  ogImage: '/deadlockbase-n/image/DEADLOCKBASE.png',
  ogSiteName:'Deadlockbase',
  twitterCard: 'summary_large_image',
  twitterDescription:'Новости, гайды на героев и многое другое по игре Deadlock - многопользовательскому шутеру 6 на 6 с большим количеством героев, предметов, тактик и механик.',
  twitterTitle:'Новости, гайды на героев и многое другое по игре Deadlock.',
  twitterImage:'/deadlockbase-n/image/DEADLOCKBASE.png',
})
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppHeader />
    <div class="video-wrapper">
    <video playsinline autoplay muted loop poster="\img\screen1.png">
      <source src="\video\main-bg.mp4" type="video/webm">
      Your browser does not support the video tag.
    </video>
    <div class="overlay"></div>
    <div class="title-container">
    <div class="title"><h1>Всё об игре Deadlock</h1></div>
    <div class="disc-title"><p>от новостей до сборок на героев</p></div>
    </div>
    </div>
    <div class="update-title-container">
    <div class="update-title"><p>ПОСЛЕДНИЕ ОБНОВЛЕНИЯ</p></div>
    <div class="update-link"><p>ПОСМОТРЕТЬ ВСЕ <img src="\img\Arrow 1.png"></p></div></div>
   <div class="update-container"><UpdateCard :card-info="imgList" :date-inf="dateList"/></div>
    <div class="about-site">
    <div class="title-container">
    <div class="title"><h1>Deadlock</h1></div>
    <div class="disc-title"><p>компьютерная игра в жанре<br> командного шутера от<br> третьего лица</p></div>
    </div></div>
    <AppFooter />
  </div>
</template>

<script lang="js">
export default {
  data(){
    return{
      imgList:['image/image 3.svg',
      'image/image 2.png',
      'image/image 1 (1).png'],
      dateList:['02.10.2024','29.09.2024','26.09.2024']
    }
  }
}
</script>
<style>
@font-face {
    font-family: 'Playfair Display';
    src:local('Playfair Display'),
     url('/fonts/PlayfairDisplay-Bold.ttf');
     font-variant-numeric: lining-nums;
}
@font-face {
    font-family: 'Montserrat';
    src:url('/fonts/Montserrat-Regular.ttf');
}
@font-face {
    font-family: 'Montserrat';
    src:url('/fonts/Montserrat-ExtraBold.ttf');
    font-weight: 800;
}
@font-face {
    font-family: 'Montserrat';
    src:url('/fonts/Montserrat-SemiBold.ttf');
    font-weight: 600;
}
@font-face {
    font-family: 'Montserrat';
    src:url('/fonts/Montserrat-Medium.ttf');
    font-weight: 500;
}
@font-face {
    font-family: 'Montserrat';
    src:url('fonts/Montserrat-Light.ttf');
    font-weight: 300;
}
html,body{margin: 0;padding: 0;height: 100%;width: auto;}
body{background-color: black;}
.about-site{width: 100%;background: linear-gradient(to bottom,  rgba(0,0,0,1) 0%,rgba(0,0,0,1) 5%,rgba(0,0,0,0) 57%,rgba(0,0,0,1) 95%,rgba(0,0,0,1) 100%),url("img\screen2.png"); height: 90vh;
background-position: center center;background-repeat: no-repeat;  background-size: cover;
display: flex;justify-content: center;flex-direction: column;}
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
.update-link{font-family:Montserrat;color: white;padding-left: 0.5%;}
@media (max-width:1280px){.about-site{margin-top: 30vh;}
.update-container{width: 90%;}}
@media (max-height:1400px ) and (max-width:1024px){.about-site{margin-top: 60vh;}
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
