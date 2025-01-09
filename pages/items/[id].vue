<template>
    <div v-if="item" class="conteyner_items">
        <div class="con">
<div class="item_name">
    <h1>{{ item.name }}</h1>
</div>
<div class="block_items">
    <div class="items_photo"><img :src=" item.url" alt=""></div>
    <div class="items_opisanie">
        <div class="items_zagolovok">
            <h2>
Оружие <img src="../../img/weapon.webp" alt="" class="target"> 500 <img src="../../img/souls.png" alt="" class="valuta">
            </h2>
        </div>
        <div class="items_text">
            <p> {{ item.first }} </p>
            <p> {{ item.second }}</p>
            <p>{{ item.third }}</p>
        </div>
    </div>
</div>
<div class="component">
    <div class="componenth2">
    <h2>Компонет для:</h2>
</div>
<div class="component_img">
    <img :src="item.component" alt="">
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
        "dataList": [{
            "id":1,
            "name":"Базовый магазин",
            "url":"https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Basic%20Magazine%20deadlock.webp?itok=W4b-l59Y",
            "first":"+26% к боезапасу",
            "second":"+12% к урону от оружия",
            "third":"",
            "component":"https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Titanic%20Magazine%20deadlock%20.webp?itok=HdyeL_P8"
        },
        {
            "id":2,
            "name":"Скоростной магазин",
            "url":"https://deadlock.one/sites/default/files/styles/preview_items/public/2024-09/карточка%20предмета%20копия.png?itok=IElxoeaN",
            "first":"+20% к скорости пуль",
            "second":"+12% к урону от оружия",
            "third":"+65 к прочности щита от пуль",
            "component":"https://deadlock.one/sites/default/files/styles/preview_items/public/2024-10/Pristine_Emblem.png?itok=_lqhkgQZ"
        },
        {
            "id":3,
            "name":"Ближняя дистанция",
            "url":"https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Close%20Quarters%20deadlock.webp?itok=GMyStgG0",
            "first":"+4% к сопротивляемости пулям",
            "second":"Когда цель находится на малой дистанции, вы наносите больше урона оружием.",
            "third":"",
            "component":"https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Point%20Blank%20deadlock.webp?itok=s3saH_63"
        },
        
        {
            "id":4,
            "name":"Усилитель выстрелов в голову",
            "url":"https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Headshot%20Booster%20deadlock.webp?itok=4F4pWEh5",
            "first":"+4% к скорострельности",
            "second":"+40 к прочности щита от пуль",
            "third":"Урон от оружия выше при выстрелах в голову.",
            "component":"https://deadlock.one/sites/default/files/styles/preview_items/public/2024-10/headhunter.png?itok=qZCiVMAN"
        },
        {
            "id":5,
            "name":"Разрывная оборона",
            "url":"https://deadlock.one/sites/default/files/styles/preview_items/public/2024-06/Hollow%20Point%20Ward%20deadlock.webp?itok=WKQdAZsP",
            "first":"+26% к прочности щита от спиритизма",
            "second":"+4 ед. к спиритической мощи",
            "third":"Увиличивает наносимый урон от оружия, когда у вас больше 65% здоровья.",
            "component":"#"
        },
        ],
        item: null,
      };
    },
    mounted() {
    const id = parseInt(this.$route.params.id);
    this.item = this.getItemById(id);
  },
  methods: {
    getItemById(id) {
      return this.dataList.find(item => item.id === id) || null;
    }
  }
}
</script>

<style>
body{
    margin: 0%;
}

.conteyner_items{
    padding-top: 75px;
    margin: 0%;
    height: 100vh;
  background: linear-gradient(135deg, rgba(76,76,76,1) 0%,rgba(0,0,0,1) 25%,rgba(19,19,19,1) 39%,rgba(19,19,19,1) 39%,rgba(44,44,44,1) 50%,rgba(43,43,43,1) 63%,rgba(19,19,19,1) 89%,rgba(19,19,19,1) 89%,rgba(17,17,17,1) 91%,rgba(17,17,17,1) 91%);
  background-attachment: fixed; 
  color: white;
}
.item_name{
    font-size: 1.5rem;
    padding-bottom: 3%;
    margin: 0%;
}
.item_name h1{
    margin: 0%;
}
.con{
    width: 80%;
    margin: 0% auto;
}
.block_items{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 1.3rem;
}
.items_photo{
    width: 15%;
    height: 15%;
}
.items_photo img{
    height: 60%;
    width: 100% !important;
    max-width: 100% !important;
    border-radius: 6px;
    object-fit: fill;
    margin: 0%;
    padding: 0%;
}
.items_opisanie{
width: 70%;
}
.items_zagolovok{
    padding: 1%;
    background-color: rgba(229, 142, 54, 0.8901960784);
    border-radius: 5px;
    font-size: 1.3rem;
    font-weight: 700;
}
.items_zagolovok img{
    margin: 0% 10px;
    vertical-align: middle;
}
.items_zagolovok h2{
    margin: 0%;
    width: 70%;

}
.items_text p{
font-size: 1.5rem;
}
.component{
    width: 100%;
}
.componenth2{
    font-size: 1.3rem;
    font-weight: 700;
}
.component_img{
    width: 15%;
    height: 15%;
}
.component_img img{
    height: 60%;
    width: 100% !important;
    max-width: 100% !important;
    border-radius: 6px;
    object-fit: fill;
    margin: 0%;
    padding: 0%;
}
@media(max-width:480px) {
    .item_name h1{
        font-size: 2rem;
    }
    .items_photo{
      width: 60%;
    }
    .items_opisanie{
        width: 100%;
    }
    .items_zagolovok h2{
        width: 300px;
        font-size: 1.5rem;
    }
    .target{
width: 20px;
    }
    .valuta{
        width: 20px;
        height: 25px;
    }
  .component_img{
    width: 40%;
    height: 40%;
  }
  }
</style>