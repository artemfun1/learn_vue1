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
			isShow:false,
		};
	},
	methods: {
		createPost(post) {
			this.isShow=false
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
		<h1>Страница с постами</h1>
		<my-button style="margin-top: 15px; " @click="isShow=true"> Добавить пост</my-button>
		<my-dialog v-model:show="isShow" >
			<PostForm @create="createPost" />
		</my-dialog>

		<PostList v-bind:posts="posts" @removePost="deletePost" />

	
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
	display: flex;
	flex-direction: column;
}
body {
	background-color: #e6e6e6;
}
</style>
