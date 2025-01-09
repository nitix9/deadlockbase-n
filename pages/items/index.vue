<template>
    <div class="body_item">
      <div class="all_item">
        <div class="item_h1">
          <h1>Предметы</h1>
        </div>
            <div class="container">
  <div class="tab">
    <div class="tab-content" id="content-1">
        <div class="all_col_item">
        <div v-for="i of item" :key="i" class="col_item" id="1">
            <div class="col_imag_item"><NuxtLink :to="`/items/${i.id}`"><img
                :src="i.url"
                alt=""></NuxtLink></div>
          </div> 
        </div>    
        </div>
    <div class="tab-content" id="content-2">
        <div class="all_col_item">
        <div v-for="i of surviv" :key="i" class="col_item-2">
            <div class="col_imag_item"><NuxtLink to=""><img
                :src="i.url"
                alt=""></NuxtLink></div>
          </div>   
         </div>
        </div> 
    <div class="tab-content" id="content-3">
        <div class="all_col_item">
        <div v-for="i of spirit" :key="i" class="col_item-3">
            <div class="col_imag_item"><NuxtLink to=""><img
                :src=" i.url"
                alt=""></NuxtLink></div>
          </div> 
        </div> 
        </div>
    <div class="tab-nav">
      <a class="tab-link" href="#content-1">Оружие </a>
      <a class="tab-link" href="#content-2">Живучесть </a>
      <a class="tab-link" href="#content-3">Спиритизм </a>
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
        "item": [{
        "id": 1,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Basic%20Magazine%20deadlock.webp?itok=W4b-l59Y",
        },
        {
        "id": 2,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-09/карточка%20предмета%20копия.png?itok=IElxoeaN",
        },
        {
        "id": 3,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Close%20Quarters%20deadlock.webp?itok=GMyStgG0",
        },
        {
        "id": 4,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Headshot%20Booster%20deadlock.webp?itok=4F4pWEh5",
        },
        {
        "id": 5,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Hollow%20Point%20Ward%20deadlock.webp?itok=WKQdAZsP",
        }, 
        ],
      "surviv":[{
        "id": 1,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Enduring%20Spirit%20deadlock.webp?itok=HavAw0A4",
        },
        {
        "id": 2,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Extra%20Health%20deadlock.webp?itok=1ankljen",
        },
        {
        "id": 3,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Extra%20Regen%20deadlock.webp?itok=E9duq1x8",
        },
        {
        "id": 4,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Extra%20Stamina%20deadlock.webp?itok=CT53XM0D",
        },
        {
        "id": 5,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Melee%20Lifesteal%20deadlock.webp?itok=L_mYumay",
        }, 
       ],
       "spirit":[{
        "id": 1,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-09/ammo%20scavenger%20предмет%20в%20deadlock.webp?itok=ax9V5UJx",
        },
        {
        "id": 2,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Extra%20Charge%20%20deadlock.webp?itok=vAnzajBA",
        },
        {
        "id": 3,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Extra%20Spirit%20deadlock.webp?itok=p4Nz2V2y",
        },
        {
        "id": 4,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Mystic%20Burst%20deadlock.webp?itok=nQjOPi5b",
        },
        {
        "id": 5,
        "url": "https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Mystic%20Reach%20deadlock.webp?itok=awarRiDJ",
        }, 
       ]    
      }
    },
  //   mounted() {
  //   if (!this.$route.hash) {
  //     this.$router.push({ hash: 'content-1' });
  //   }
  // },
  }
</script>

  <style>
  body{
    margin: 0%;
  }
  .body_item{
    padding-top: 75px;
    margin: 0%;
    height: 100vh;
  background: linear-gradient(135deg, rgba(76,76,76,1) 0%,rgba(0,0,0,1) 25%,rgba(19,19,19,1) 39%,rgba(19,19,19,1) 39%,rgba(44,44,44,1) 50%,rgba(43,43,43,1) 63%,rgba(19,19,19,1) 89%,rgba(19,19,19,1) 89%,rgba(17,17,17,1) 91%,rgba(17,17,17,1) 91%);
  background-attachment: fixed; 
  }

  .item_h1{
    padding-left: 2.5%;
    font-size: 1.5rem;
    margin: 0%;
    }
    .item_h1 h1{
        margin: 0%;
        color: white;
    }
.all_item{
    width: 80%;
    margin: 0% auto;
}

  .all_col_item{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 1rem;
  }
  .col_item{
    width: 15%;
    height: 15%;
  }
  .col_item img{
    height: 60%;
    width: 100% !important;
    max-width: 100% !important;
    border-radius: 6px;
    object-fit: fill;
    margin: 0%;
    padding: 0%;
  }
  .col_item-2{
    width: 15%;
    height: 15%;
  }
  .col_item-2 img{
    height: 60%;
    width: 100% !important;
    max-width: 100% !important;
    border-radius: 6px;
    object-fit: fill;
    margin: 0%;
    padding: 0%;
  }
  .col_item-3{
    width: 15%;
    height: 15%;
  }
  .col_item-3 img{
    height: 60%;
    width: 100% !important;
    max-width: 100% !important;
    border-radius: 6px;
    object-fit: fill;
    margin: 0%;
    padding: 0%;
  }

  .container {
    margin: 1rem;
    padding: 1.5rem;
  }

  .tab {
    display: flex;
    flex-direction: column;
  }

  .tab-content {
    display: none;
  }

  .tab-content:target {
    display: block;
  }

  .tab-nav {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #dee2e6;
    margin-bottom: 1rem;
    order: -1;
  }

  .tab-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #0d6efd;
    text-decoration: none;
    background: 0 0;
    border: 1px solid transparent;
    margin-bottom: -1px;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;
  }

  #content-1:target~.tab-nav>[href="#content-1"],
  #content-2:target~.tab-nav>[href="#content-2"],
  #content-3:target~.tab-nav>[href="#content-3"] {
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    cursor: default;
  }
  @media(max-width:480px){
    .col_item{
    width: 40%;
    height: 15%;
  }
  .col_item-2{
    width: 40%;
    height: 15%;
  }
  .col_item-3{
    width: 40%;
    height: 15%;
  }

}
</style>