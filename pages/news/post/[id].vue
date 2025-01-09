<template>
<div class="post-content">
<h1>{{post_data.title}}</h1>
<p v-html="getImage() "></p>
</div>
</template>
<style scoped>
.post-content{ padding-top: 75px;background: linear-gradient(135deg, rgba(76,76,76,1) 0%,rgba(0,0,0,1) 25%,rgba(19,19,19,1) 39%,rgba(19,19,19,1) 39%,rgba(44,44,44,1) 50%,rgba(43,43,43,1) 63%,rgba(19,19,19,1) 89%,rgba(19,19,19,1) 89%,rgba(17,17,17,1) 91%,rgba(17,17,17,1) 91%);}
h1,p{margin: 0; color: white ;font-family: Montserrat;}
h1{padding: 40px 0 40px 0; margin: 0 auto;}
p{padding-bottom: 60px;max-width: 60%; font-size: 1.5rem;}
.post-content{display: flex;align-items: center;flex-direction: column;}
@media screen and (max-width:600px) {
    p{font-size: 1rem;max-width: 90%;}
    h1{ font-size: 1.2rem;}
}
</style>
<script>
import { useNewsStore } from "../../../store/index"
const newsStore = useNewsStore();
export default{
    data (){
        return{
            post_data:newsStore.news[0].find(item=>item.id==this.$route.params.id),
        }
    },
    methods:{
        getImage(){
                    // Копируем описание
            let description = JSON.stringify(this.post_data.discription);
            description = description.replace(/\\n/g, '<br>').replace(/^"|"$/g, '');
            console.log(description)
            // Заменяем метки {{imgX}} на соответствующие <img>
            this.post_data.updates_image.forEach((src, index) => {
                const imgTag = `<p style="text-align:center"><img src="${src}" alt="image${index}" style="max-width: 100%;"/></p>`;
                description = description.replace(`{img${index}}`, imgTag);
            });
            return description;
        },
    }
}
</script>