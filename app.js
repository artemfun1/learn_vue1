const App = {
	data() {
		return {
			title: "Список заметок",
			placeholderString: "Введите название заметки",
			inputValue: "",
			notes: ["заметка 1", "заметка 2"],
		};
	},
	methods: {
		addNewNote() {
			if (this.inputValue !== "") {
				this.notes.push(this.inputValue);
				this.inputValue = "";
			}
		},
		inputKeyPress() {
			this.addNewNote();
		},
		toUpperCase(item) {
			return item.toUpperCase();
		},
		removeNote(idx) {
			this.notes.splice(idx, 1);
		},
	},
  computed:{
    doubleCountComputed(){
      // console.log('doubleComputed')
      return this.notes.length * 2
    },
  },
  watch:{
    inputValue(value){
      // console.log(value, 'eee')
    }
  }
};







Vue.createApp(App).mount("#app");


