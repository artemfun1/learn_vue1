<script>
export default {
	data() {
		return {
			posts: [
				{ id: 1, title: "JavaScript", body: "Описание поста" },
				{ id: 2, title: "JavaScript 2", body: "Описание поста 2" },
				{ id: 3, title: "JavaScript 3", body: "Описание поста 3" },
			],
			name: "",
			body: "",
		};
	},
	methods: {
		addPost(e) {
			e.preventDefault();
			this.posts.push({
				id: posts.length + 1,
				title: this.name,
				body: this.body,
			});
		},
	},
};
</script>

<template>
	<div class="app">
		<form>
			<h4>Создание поста</h4>
			<input class="input" type="text" placeholder="Название" />
			<input class="input" type="text" placeholder="Описание" />
			<button @click="addPost" type="submit">Добавить</button>
		</form>
		<div class="post" v-for="post in posts">
			<div><strong>Название: </strong> {{ post.title }}</div>
			<div><strong>Описание: </strong> {{ post.body }}</div>
		</div>
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.post {
	padding: 15px;
	border: 2px solid teal;
	margin-top: 15px;
}
.input {
	width: 100%;
	border: 1px solid teal;
	padding: 10px;
	margin-top: 10px;
}

.app {
	padding: 20px;
}
body {
	background-color: #e6e6e6;
}
</style>
