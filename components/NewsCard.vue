<template>
    <div class="card-container">
        <NuxtLink :to="`/news/post/${newsData.id}`">
            <div class="wrapper-card">
                <div class="wrapper-card__title">
                    <p class="title-card wrapper-card__title-card">{{ newsData.title }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>
<style scoped>
a{text-decoration: none;}
.wrapper-card__title{padding-bottom: 14px;}
p.title-card.wrapper-card__title-card {
    max-width: 165px;text-align: center;font-variant-numeric: lining-nums;}
.card-container{padding: 48px 12px;}
.wrapper-card{display: flex;flex-direction: column;align-items: center;justify-content: flex-end;}
.title-card {
    font-family: Montserrat;
    font-weight: 300;
    color: white;
    font-size: 1.5rem;
    margin: 0;
}

.wrapper-card {
    height: 206px;
    border-radius: 25px;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), url('../public/image/image 2.png') no-repeat center center;
    min-width: 362px;
}
@media screen and (max-width:692px) {
    .card-container {
        padding: 20px 5px;
    }

    div.wrapper-card {
        min-width: 39vw;
        width: 100%;
    }
}
@media screen and (max-width:418px) {
    div.wrapper-card {
        height: 180px;
        width: 100%;
} 
p.title-card.wrapper-card__title-card {max-width: 100px;}
}
@media screen and (max-width:772px) {
    .wrapper-card {
    height: 30vw;
    min-width: 45vw;
} 
.title-card{
    font-size: 1rem;
}}
</style>
<script>
export default{
    props:["newsData"]
}
</script>