<template>
    <div class="telo">
      <div class="all">
        <div class="zag_h1">
          <h1>Персонажи</h1>
        </div>
        <div class="all_opis">
          <p>
            Раздел посвящен всем героям игры Deadlock от Valve.
          </p>
        </div>
        <div class="all_col">
          <div v-for="i of items" :key="i" class="col">
            <div class="col_imag"><NuxtLink :to="`/heroes/${i.id}`">
              <img :src=" i.url " alt="">
            </NuxtLink></div>
            <div class="col_name">
              <h2>{{ i.data.name}}</h2> 
            </div>
            <div class="col_opisanie">
              <p>{{ i.data.opisanie }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        "items": [{
        "id": 1,
          "url": "https://deadlock.one/sites/default/files/styles/foto_personazha/public/2024-06/Abrams%20Deadlock%20новая%20игра%20от%20valve.webp?itok=tb0kDqWv",
        "data":{
          name:"Абрамс",
          opisanie:"Рвется в ближний бой"
        }}, 
        {"id": 2,
          "url": "https://deadlock.one/sites/default/files/styles/foto_personazha/public/2024-06/Персонаж%20Bebop%20%28Бибоб%29%20Deadlock%20новая%20игра%20от%20valve%20.webp?itok=qQfSuT47",
        "data":{
          name:"Бибоп",
          opisanie:"Цепляет крюком"}}, 
          {"id": 3,
            "url": "https://deadlock.one/sites/default/files/styles/foto_personazha/public/2024-06/Персонаж%20Dynamo%20%28Динамо%29%20Deadlock%20новая%20игра%20от%20valve_0.webp?itok=hH-N3GzT",
        "data":{
          name:"Динамо",
          opisanie:"Держит врагов на месте"}},
          {"id": 4,
            "url": "https://deadlock.one/sites/default/files/styles/foto_personazha/public/2024-06/Персонаж%20Grey%20Talon%20%28серый%20коготь%29%20Deadlock%20новая%20игра%20от%20valve%20.webp?itok=YEODJtnK",
        "data":{
          name:"Серый Коготь",
          opisanie:"Точно стреляет из далека"}},
          {"id": 5,
            "url": "https://deadlock.one/sites/default/files/styles/foto_personazha/public/2024-06/персонаж%20Haze%20%28Хейз%29%20Deadlock%20новая%20игра%20от%20valve_0.webp?itok=l2l0K7Hg",
        "data":{
          name:"Тень",
          opisanie:"Бесшумно убивает"}},
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  body {
    margin: 0%;
  }
  
  div.telo {
    background: linear-gradient(135deg, rgba(76,76,76,1) 0%,rgba(0,0,0,1) 25%,rgba(19,19,19,1) 39%,rgba(19,19,19,1) 39%,rgba(44,44,44,1) 50%,rgba(43,43,43,1) 63%,rgba(19,19,19,1) 89%,rgba(19,19,19,1) 89%,rgba(17,17,17,1) 91%,rgba(17,17,17,1) 91%);
    background-attachment: fixed;
    margin: 0%;
    padding: 0%;
    height: 100vh; 
    width: auto;
    color: white;
    display: flex;
    padding-top: 75px;
  }
  
  .zag_h1 {
    font-size: 1.5rem;
    margin: 0%;
  }
  
  .all {
    max-width: 80%;
    margin: 0% auto;
  }
  
  .all_opis {
    margin-bottom: 3%;
    font-size: 2rem;
    margin: 0%;
  }
  
  .all_col {
    margin: 0% auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 1.6rem;
  }
  
  .col {
    background-color: #242935;
    width: 18%;
    height: 450px;
    border-radius: 5px;
    margin: 0%;
  }
  
  .col img {
    height: 60%;
    width: 100% !important;
    max-width: 100% !important;
    border-radius: 6px;
    object-fit: fill;
    margin: 0%;
    padding: 0%;
  }
  
  .col_name h2 {
    text-align: center;
    font-size: 2.1rem;
    margin: 2%;
    font-weight: 200;
  }
  
  .col_opisanie p {
    text-align: center;
    font-size: 1.3rem;
    margin: 0%;
    margin-top: 6%;
  }
  
  @media(max-width:1400px) {}
  
  @media(max-width:1055px) {
    .col {
      flex: 0 0 auto;
      height: 400px;
    }
  
    .col_name h2 {
      font-size: 1.7rem;
    }
  
    .col_opisanie p {
      font-size: 1.1rem;
    }
  }
  
  @media(max-width:950px) {
    .col {
      flex: 0 0 auto;
      width: 30%;
      height: 440px;
    }
  
    .col_name h2 {
      font-size: 2rem;
    }
  
    .col_opisanie p {
      font-size: 1.7rem;
    }
  }
  
  @media(max-width:480px) {
    div.telo{
      height: 100%;
    }
    .col {
      flex: 0 0 auto;
      width: 40%;
      height: 300px;
    }
  
    .col_name h2 {
      font-size: 1.7rem;
    }
  
    .col_opisanie p {
      font-size: 1.1rem;
    }
  }
  </style>
