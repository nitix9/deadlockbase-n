import { defineStore, createPinia, setActivePinia } from "pinia"
const pinia = createPinia()

export default { store: setActivePinia(pinia) }
export const useNewsStore = defineStore('news', {
    state: () => {
        return {
            news: [],
        }
    },
    actions:{
        getNews(item){
            this.news.push(item)
            this.saveNews()
        },
        saveNews() { localStorage.setItem('news', JSON.stringify(this.news));},
        initializeNews() {
            try {
            this.news = JSON.parse(localStorage.getItem('news'))? JSON.parse(localStorage.getItem('news')):[]
            
            } catch {
            localStorage.setItem('news', JSON.stringify(this.news))
            }
            }
    }
})