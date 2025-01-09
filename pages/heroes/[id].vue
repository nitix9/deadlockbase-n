<template>
  <div v-if = "item" class="all_block">
<div class="bod">
 <div class="description">
  <div class="descriptional">
  <div  class="descriptionh2">
  <h2 class="txt">{{item.data.name}}</h2>
  <h3>{{item.data.opisanie}}</h3>
</div>
<div class="descriptionp">
  <p>{{item.data.about}}</p>
</div>
</div>
  <div class="photo">
  <img :src="item.data.url" >
 </div>
 </div>
</div>
<div class="spacification">
  <div class="center">
  <div class="table">
<h3>Оружие</h3>
<ul>
  <li>
    Урона в секунду {{item.spacification.dameg}}
  </li>
  <li>Урон от пуль {{item.spacification.bullet}}</li>
  <li>Пули в секунду {{item.spacification.sec}}</li>
  <li>Боезапас {{item.spacification.ammunition}}</li>
  <li>Легкий удар {{item.spacification.easy}}</li>
  <li> Тяжелый удар {{item.spacification.heavy}}</li>
</ul>
</div>
<div class="table">
<h3>Живучесть</h3>
<ul>
  <li>Максимальное здоровье {{item.spacification.max}}</li>
  <li>Востановление здоровья {{item.spacification.regen}}</li>
  <li>Сопротивляемость пулям {{item.spacification.sopbullet}}%</li>
  <li>Сопротивляемость спиритизму {{item.spacification.sopspur}}%</li>
  <li>Скорость передвижения {{item.spacification.speed}} м/с</li>
  <li>Скорость бега {{item.spacification.run}} м/с</li>
</ul>
</div>
</div>
</div>

<div class="abilities">
  <div class="block">
    <div class="block_abil">

  <div class="abil">
    <div class="abil_img">
    <img :src="item.abilities1.img1" alt="">  
  </div>
    <div class="abil_opi">
      <h3>{{item.abilities1.nazvanue1}}</h3>
    <p>{{item.abilities1.opi1}}</p>
  </div>
  </div>

  <div class="abil">
    <div class="abil_img">
    <img :src="item.abilities2.img2" alt="">  
  </div>
    <div class="abil_opi">
      <h3>{{item.abilities2.nazvanue2}}</h3>
    <p>{{item.abilities2.opi2}}</p>
  </div>
</div>
</div>

<div class="block_abil">

  <div class="abil">
    <div class="abil_img">
    <img :src="item.abilities3.img3" alt="">  
  </div>
    <div class="abil_opi">
      <h3>{{item.abilities3.nazvanue3}}</h3>
    <p>{{item.abilities3.opi3}}</p>
  </div>
  </div>

  <div class="abil">
    <div class="abil_img">
    <img :src="item.abilities4.img4" alt="">  
  </div>
    <div class="abil_opi">
      <h3>{{item.abilities4.nazvanue4}}</h3>
    <p>{{item.abilities4.opi4}}</p>
  </div>
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
        "dataList": [{
        "id": 1,
        "data":{
          name:"Абрамс",
          opisanie:"Рвется в ближний бой",
          about:" Сила и выносливость Абрамса позволяют ему сражаться в первых рядах - он часто налетает прямо на врагов заставляя их бросаться в бегство.Если враги сосредотачиваются на Абрамс его союзники на задней линии могут безнаказанно вести по ним огонь.",
          url:"https://downloader.disk.yandex.ru/preview/076081182dd27380404ac10c23c04cf5265825fe9753701251c8cbe5ea77fd91/677d6488/sMuAWINMhBDeDKo8cjQXzsIYcUZMqfaxFaMUaQqzyCxieibgC0ysQWG0jB7KuKfB1U0ZZoOm-bELjznUX2PRfg%3D%3D?uid=0&filename=abrams.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048",
        },
        "spacification":{
         dameg:"63",
         bullet:"4,5",
         sec:"1,67",
         ammunition:"9",
         easy:"63",
         heavy:"116",
         max:"570",
         regen:"1,5",
         sopbullet:"0",
         sopspur:"0",
         speed:"6,8",
         run:"0,5",
         endur:"3"
        },
      "abilities1":{
         img1:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Способность%20Abrams%20персонажа%20в%20Deadlock%20Siphon%20Life_1.webp?itok=aE0KSQSk",
         nazvanue1:"Периливание жизни",
         opi1:"Абрамс высасывает здоровье врагов, которые находятся впереди и попадают в радиус действия."
      },
    "abilities2":{
         img2:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Способность%20Abrams%20Shoulder%20Charge%20персонажа%20в%20Deadlock%20.webp?itok=tGRzvmm4",
         nazvanue2:"Плечем вперед",
         opi2:"Абрамс делает рывок вперед, тащит за собой врагов и оглушает их,если ударит об стену. При столкновении с вражескими героями скорость рывка увиличивается"
      },
    "abilities3":{
         img3:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5.webp?itok=Wh86euLf",
         nazvanue3:"Адская устойчивость",
         opi3:"Абрамс постеменно восстанавливает себе часть здоровья, потерянного при получении урона."
      },
    "abilities4":{
         img4:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_0.webp?itok=nKbyr6kh",
         nazvanue4:"Сейсмический удар",
         opi4:"Абрамс подпрыгивает высоко в воздух, а затем обрушивается в выбранную точку. Призимление наносит урон всем врагам в радиусе действия и оглушает их."
      }}, 
        {"id": 2,
        "data":{
          name:"Бибоп",
          opisanie:"Цепляет крюком",
          about:"Бибоп комбенирует свои умения множеством способов для любых задач - будь то прорыв вражеских позиций, спасение союзника или нанессение огромного урона. Когда ситуация не требует тонкости, огромный лазер Бибопа решает все проблемы.",
          url:"https://downloader.disk.yandex.ru/preview/e5ba8110dc397582cce0af4b2038f0dc71bc0bda03c8f2abc8e0b8456281052a/677d64c0/BuMd4_ImzixMsj6drkTIcJamlhQ8EP2mpDEAaxeXnnCMhPyii2eDlJsRreXFywe5soUE25EC5XKMitqnkHR5IA%3D%3D?uid=0&filename=acetone-202514-195110-704.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048",},
        "spacification":{
         dameg:"66",
         bullet:"5,3",
         sec:"12,5",
         ammunition:"66",
         easy:"63",
         heavy:"116",
         max:"650",
         regen:"3",
         sopbullet:"10",
         sopspur:"0",
         speed:"6,6",
         run:"3,5",
         endur:"3"
        },
      "abilities1":{
         img1:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_1.webp?itok=KzJ2COEL",
         nazvanue1:"Взрывной апперкот",
         opi1:"Герой совершает лёгкий удар ближнего боя по существам поблизости, отбрасывая их и нанося урон в радиусе их приземления. Не наносит урона союзникам."
      },
    "abilities2":{
         img2:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_2.webp?itok=7M-JNpzY",
         nazvanue2:"Бомба-липучка",
         opi2:"Прикрепляет бомбу-липучку на ближайшего врага, которая наносит взрывной урон после небольшой задержки. Получает +2.5% к урону бомбы за каждого задетого вражеского героя."
      },
    "abilities3":{
         img3:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_3.webp?itok=i8zxldUM",
         nazvanue3:"Крюк",
         opi3:"Герой выпускает крюк, которым притягивает первого попавшегося героя и наносит ему урон, если это враг. Цель оказывается с той стороны, куда герой смотрит."
      },
    "abilities4":{
         img4:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_4.webp?itok=M6CucoLM",
         nazvanue4:"Гиперлуч",
         opi4:"Герой заряжает свой лазер, после чего выпускает мощный поток энергии, который наносит урон и замедляет передвижение и рывки врагов. Во время действия герой передвигается и поворачивается медленнее. Если активировать способность в воздухе, во время её действия герой будет парить."
      }}, 
          {"id": 3,
        "data":{
          name:"Динамо",
          opisanie:"Держит врагов на месте",
          about:"Динамо лечит себя и союзников, выжидая своег момента. Продуманное использование Сингулярности позволит склонить чашу весов в вашу пользу во время командного боя.",
          url:"https://downloader.disk.yandex.ru/preview/e0a8aacd96eab27ecac1f319f9d8a30befb94dd941dd2cd1f953ca26888f5fed/677d64a6/KwOkaa4_16A0-eBS6lqGoEPUhWRPITeaQ4F1AgkvSkk0xN1r5s5agaJmnJhWtK7SDgCxORQsMZiIQklKEAjpgQ%3D%3D?uid=0&filename=dip.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048",        },
        "spacification":{
         dameg:"52",
         bullet:"13",
         sec:"4",
         ammunition:"18",
         easy:"63",
         heavy:"116",
         max:"650",
         regen:"2",
         sopbullet:"0",
         sopspur:"0",
         speed:"6,8",
         run:"0,5",
         endur:"3"
        },
      "abilities1":{
         img1:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_5.webp?itok=Ak7Rjt8C",
         nazvanue1:"Кинетический импульс",
         opi1:"Герой выпускает энергетический импульс, который подбрасывает врагов в воздух."
      },
    "abilities2":{
         img2:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_6.webp?itok=Czzc6kFP",
         nazvanue2:"Квантовое запутывание",
         opi2:"Динамо ненадолго исчезает в пустоту, а затем появляется невдалеке с перезаряженным оружием и повышенной скорострельностью следующей обоймы. Если активировать умение клавишей [М3], оно также перенесёт союзников поблизости и даст им половину от бонуса к скорострельности."
      },
    "abilities3":{
         img3:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_7.webp?itok=-OYRMMeQ",
         nazvanue3:"Востановительное сияние",
         opi3:"Во время действия у Динамо и союзников поблизости постепенно восстанавливается здоровье."
      },
    "abilities4":{
         img4:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_8.webp?itok=47nwz3-U",
         nazvanue4:"Сингулярность",
         opi4:"Герой создаёт в своих руках сингулярность, которая притягивает врагов поблизости и наносит им урон, а в конце действия подбрасывает их в воздух."
      }},
          {"id": 4,
        "data":{
          name:"Серый Коготь",
          opisanie:"Точно стреляет из далека",
          about:"Серый Коготь - хитрый охотник, использующий смертельную точность, ловушки и продуманный выбор позиции, чтобы одолеть даже самых сильных противников",
          url:"https://downloader.disk.yandex.ru/preview/223f5738ed146a970070c2da7edf68a6dfe0784df1258220df6f4d14f3f8a3eb/677d64ad/3kJq3yZtTfnl7N7VsROZcpamlhQ8EP2mpDEAaxeXnnCepDDfzbAp36Hi9_RIZcqKYQYyPbLmNbZTWCctx-vgKg%3D%3D?uid=0&filename=acetone-202514-195534-246.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048",

        },
      "spacification":{
         dameg:"45",
         bullet:"25",
         sec:"1,82",
         ammunition:"17",
         easy:"63",
         heavy:"116",
         max:"550",
         regen:"2,5",
         sopbullet:"0",
         sopspur:"0",
         speed:"6,3",
         run:"0,5",
         endur:"3"
        },
      "abilities1":{
         img1:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_9.webp?itok=XOOwgcE6",
         nazvanue1:"Заряженный выстрел",
         opi1:"Серый Коготь делает мощный выстрел, который пронзает врагов."
      },
    "abilities2":{
         img2:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_10.webp?itok=KG_ioBbK",
         nazvanue2:"Дождь из стрел",
         opi2:"Серый Коготь подпрыгивает высоко в воздух и начинает медленно парить. Находясь в воздухе, он наносит дополнительный урон попаданиями и совершает мультивыстрелы."
      },
    "abilities3":{
         img3:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_11.webp?itok=-eBu6J0P",
         nazvanue3:"Спиритическая ловушка",
         opi3:"Выбрасывается ловушка, которая начинает заряжаться. После зарядки ловушка обездвиживает врагов, попавших в радиус её действия."
      },
    "abilities4":{
         img4:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_12.webp?itok=X5pnNtzG",
         nazvanue4:"Управляемая сова",
         opi4:"После подготовки в 1.5 с. Серый Коготь выпускает призрачную сову, которая следует его командам и взрывается при столкновении, нанося урон и оглушая врагов. Удерживайте [ЛКМ], чтобы ускорить сову. Нажмите [ПРОБЕЛ], чтобы взорвать сову. За каждого вражеского героя, убитого совой, навсегда даётся дух. сила."
      }},
          {"id": 5,
        "data":{
          name:"Тень",
          opisanie:"Бесшумно убивает",
          about:"Тень может безпроблем выстоять в перестрелке, если сосредоточится на цели. Она предпочитает создовать для себя выгодные ситуации, избегая урона, а затем изрешечивая врагов на близкой дистанции",
          url:"https://downloader.disk.yandex.ru/preview/da4594dcdc788f67e54d72fce5d0ee6dd17165291e3c5435e537e3d5af4e8553/677d64c3/vzjjXXyKq3-Sz4jobgVwR5amlhQ8EP2mpDEAaxeXnnDWafXC-Z-X_bth7Pn1rzgqv48JCPoAJrehiWi10mymjw%3D%3D?uid=0&filename=acetone-202514-195343-0.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048",

        },
      "spacification":{
         dameg:"56",
         bullet:"5,6",
         sec:"10",
         ammunition:"25",
         easy:"63",
         heavy:"116",
         max:"500",
         regen:"2",
         sopbullet:"0",
         sopspur:"0",
         speed:"8,3",
         run:"0,5",
         endur:"3"
        },
        "abilities1":{
         img1:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/Без%20имени-5_13.webp?itok=2r7rWZwd",
         nazvanue1:"Усыпляющий кинжал",
         opi1:"Тень бросает кинжал, который наносит урон и усыпляет цель. Спящие цели просыпаются вскоре после получения урона. Бросок кинжала не лишает Haze невидимости и не прерывает активированные умения врагов."
      },
    "abilities2":{
         img2:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/2.webp?itok=dkBABt99",
         nazvanue2:"Тымовая шашка",
         opi2:"Позволяет скрыться благодаря невидимости и повышению скорости передвижения. Тень теряет невидимость, если начинает атаковать. Враги видят Тень, если она близко."
      },
    "abilities3":{
         img3:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/3.webp?itok=wctUjDfF",
         nazvanue3:"Пристальный взгляд",
         opi3:"Стрельба по цели увеличивает урон, наносимый ей выстрелами. Сила эффекта накапливается: +2 ед. при попадании в голову, +1 ед. — в другие части тела."
      },
    "abilities4":{
         img4:"https://deadlock.one/sites/default/files/styles/ikonka_sposobnosti/public/2024-07/4.webp?itok=p9qJ05pl",
         nazvanue4:"Танец пуль",
         opi4:"Тень входит в кураж и начинает стрелять по ближайшим врагам с идеальной точностью. На период куража она получает бонус к скорострельности и уклоняется от некоторых выпущенных в неё пуль."
      }
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

<style scoped>
html,body{
margin: 0%;
padding: 0%;
height: 100%;
width: auto;
color: white;
}
.all_block{
  margin: 0%;
  padding-top: 75px;
  background-attachment: fixed;
  background: linear-gradient(135deg, rgba(76,76,76,1) 0%,rgba(0,0,0,1) 25%,rgba(19,19,19,1) 39%,rgba(19,19,19,1) 39%,rgba(44,44,44,1) 50%,rgba(43,43,43,1) 63%,rgba(19,19,19,1) 89%,rgba(19,19,19,1) 89%,rgba(17,17,17,1) 91%,rgba(17,17,17,1) 91%); 
  background-attachment: fixed;
  color: white;
}
.description{
display: flex;
flex-wrap:wrap-reverse;
width: 90%;
margin: 0px auto;
}
.descriptional{
flex-direction: column;
width: 40%;
}
.descriptionh2{
padding-top: 2.5%;
width: 90%;
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
}
.descriptionp{
width: 90%;
height: 20vh;
}
.descriptionp p{
margin: 0 auto;
font-size: 1.3rem;
padding: auto;
font-family: 'Montserrat';
}
.photo{
width: 50%;
margin: 0% auto;
padding-left: 10%;
}
div.photo img{
width: 60%;
}
.spacification{
  width: 100%;
  background-color: #3d3d3d;
margin-top: 4%;
}
.center{
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
margin: 4% 0%;
}
.table{
  margin: 2%;
  width: 30%;
  font-family: 'Playfair Display';
}
.table h3{
  margin: 0%;
  padding-left: 5%;
  font-size: 1.5rem;
}
.table ul{
  font-size: 1.3rem;
}
.table li{
  margin:1% 0%;
}
.block{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.block_abil{
  width: 45%;
  margin: 0% auto;
}
.abil{
  display: flex;
  background-color: #3d3d3d;
  border-radius: 5px;
  margin: 2% 0%;
  height: auto;
  padding: 15px;
}
.abil h3{
  margin-top: 0%;
  margin-bottom: 5px;
}
.abil p{
  margin: 0%;
}
.abil_img{
padding-right: 2%;
margin-left: 1%;
margin-top: 2%;
}
.abil_opis{
  width: 60%;
}
.txt{
  font-family: 'Playfair Display';
}
@media(max-width:1400px){
.descriptional{
  width: 40%;
}
}
@media(max-width:1050px){
  .body{
  height: auto;
}
.descriptional{
  width: 40%;
}
.descriptional p{
  font-size:1rem;
}
}
@media(max-width:950px){
.all_block{
  height: auto;
}
.descriptional{
width: 100%;
}
.descriptional p{
  font-size:1.5rem;
}
.photo{
margin: 0 auto;
}
}
@media(max-width:480px){
.body{
  height: auto;
}
.descriptional{
width: 100%;
}
.descriptional p{
font-size: 1rem;
}
.photo{
  width: auto;
margin: 0 auto;
}
.table{
  width: 100%;
}
.block_abil{
  width: 100%;
}
.abil{
padding: 10px;
height: auto;
}
.abil h3{
  margin-bottom: 1%;
}
.abil p{
  margin: 0%;
}
}
</style>