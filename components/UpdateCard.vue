<template>
<div class="update-card" v-for="n,index of cardInfo" v-bind:style="{background:'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%),'+`url('${n}')`,
backgroundRepeat:'no-repeat',backgroundPosition:'center'+' '+'center', backgroundSize:'cover',border:'rgba(255,255,255,0.2)'+' '+'solid'+' '+'1px'}">
<div class="update-card_info">Обновление<p class="update-card__date">{{dateInf[index]}}</p></div></div>
</template>
<script>
export default{
    props:['cardInfo','dateInf']
}
</script>
<style scoped>
.update-card{color: white; display: flex;width: 50vh;height: 27vh;top: 0;left: 0;background-position: center center;background-size: cover;border-radius:25px;
justify-content: center;align-items: flex-end;}
.update-card_info{font-family:Montserrat;font-weight: 500;color: white;text-align: center;font-size: 1.5rem ;margin: 0;}
.update-card__date{font-family: Playfair Display;color: white;font-size: 1.5rem;text-align: center;font-variant-numeric: lining-nums;padding-bottom: 15%;}
p{margin: 0}
</style>
