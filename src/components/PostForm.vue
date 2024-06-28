<template>

	<form class="form" @submit.prevent>
		<h4>Создание поста</h4>

		<my-input
			v-model:value="post.title"
			placeholder="Название"
		/>
		<my-input
		v-model:value="post.body"
		placeholder="Описание"/>
		
		<my-button @click="createPost"
		style="margin-top: 15px;"> Добавить </my-button>
	</form>

</template>

<script>


export default {
	data() {
		return {
			post: {
				title: "",
				body: "",
			},
		};
	},
	methods: {
		createPost() {
			this.post.id = new Date();
			this.$emit("create", this.post);
			this.post = {
				title: "",
				body: "",
			};
		},
	},
	watch:{
		post(newValue){
console.log(newValue)
console.log(1)
		}
	}
};
</script>

<style scoped>
.form {
	display: flex;
	flex-direction: column;
}
</style>
