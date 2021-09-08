const app = Vue.createApp({
    //data, functions to react to events we want
    data(){
        return{
            showbooks:true,
            title :'the final empire',
            author:'gloria',
            age: 24

        }
    },
    methods: {
        // changeTitle(title){
        //     this.title = title 
        // }
        toggleshowbooks(){
            this.showbooks = !this.showbooks
        }
    }
})

app.mount('#app')