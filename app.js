const App ={
  data(){
    return {
      title:'Список заметок',
      placeholderString:"Введите название заметки",
      inputValue : '',
      notes:['заметка 1', 'заметка 2'],

    }
  },
  methods:{
    inputChangeHandler(event){
      this.inputValue = event.target.value
    },
    addNewNote(){
      this.notes.push(this.inputValue)
      this.inputValue = ''
    },
    inputKeyPress(event){
        if(event.key === "Enter"){
          this.addNewNote()
        }
    }
  }
}

Vue.createApp(App).mount('#app')