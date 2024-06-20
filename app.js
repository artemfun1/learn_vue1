const App = {
	data: ()=> ({
		title:'я есть Грут',
		myHtml: '<h1>Vue 3</h1>',
		person:{
			firstName:'Test',
			lastName: 'front',
			age: 25

		},
		array: [1,2,3,4,5,6]
	}),
	methods: {
		// stopPropagation(e){
		// 	e.stopPropagation()
		// }
		
	},
  computed:{
    
  },
  watch:{
   
  }
};



Vue.createApp(App).mount("#app");


