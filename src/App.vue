<script>
import PostForm from "@/components/PostForm";
import PostList from "./components/PostList";

export default {
	components: {
		PostList,
		PostForm,
	},
	data() {
		return {
			posts: [
				{ id: 1, title: "JavaScript", body: "Описание поста" },
				{ id: 2, title: "JavaScript 2", body: "Описание поста 2" },
				{ id: 3, title: "JavaScript 3", body: "Описание поста 3" },
			],
		};
	},
	methods: {
		createPost(post) {
			this.posts.push(post);
		},
		deletePost(postId) {
			this.posts = this.posts.filter(post => post.id !== postId);
		},
	},
};
</script>

<template>
	<div class="app">
		<PostForm @create="createPost" />

		<PostList
			v-if="posts.length > 0"
			v-bind:posts="posts"
			@deletePost="deletePost"
		/>
		<h3 v-else>Пользователей нет</h3>
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.app {
	padding: 20px;
}
body {
	background-color: #e6e6e6;
}
</style>
