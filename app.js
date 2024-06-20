const App = {
	data: ()=> ({
		title:'я есть Грут',
		myHtml: '<h1>Vue 3</h1>',
		person:{
			firstName:'Test',
			lastName: 'front',
			age: 25

		},
		array: [1,2]
	}),
	methods: {
		// stopPropagation(e){
		// 	e.stopPropagation()
		// }
		addItem(){
			this.array.unshift(this.$refs.myInput.value)
			this.$refs.myInput.value = ''

		},
		remove(i){
			this.array.splice(i,1)
		},
		log(){
			console.log(1)
		}
	},
  computed:{
		evenItems(){
			return this.array.filter(i=>i%2===0)
		}

    
  },
  watch:{
   
  }
};



Vue.createApp(App).mount("#app");


