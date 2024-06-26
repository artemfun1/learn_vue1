<script>
import PostForm from "@/components/PostForm";
import axios from "axios";
import PostList from "./components/PostList";
import MyButton from "./components/Ui/MyButton.vue";

export default {
	components: {
		PostList,
		PostForm,
	},
	data() {
		return {
			posts: [],
			isShow: false,
			isPostLoading: true,
		};
	},
	methods: {
		createPost(post) {
			this.isShow = false;
			this.posts.push(post);
		},
		deletePost(postId) {
			this.posts = this.posts.filter(post => post.id !== postId);
		},
		async fetchPost() {
			try {
				this.isPostLoading = true;
				setTimeout(async () => {
					const response = await axios.get(
						"https://jsonplaceholder.typicode.com/posts?_limit=5"
					);
					this.posts = response.data;
					this.isPostLoading = false;
				}, 1000);
			} catch (e) {
				console.log(e);
			}
		},
	},
	mounted() {
		this.fetchPost();
	},
};
</script>

<template>
	<div class="app">
		<h1>Страница с постами</h1>
		<my-button style="margin: 15px 0" @click="isShow = true">
			Добавить пост</my-button
		>
		<my-dialog v-model:show="isShow">
			<PostForm @create="createPost" />
		</my-dialog>
		<div v-if="isPostLoading">Loading...</div>
		<PostList
			v-else="!isPostLoading"
			v-bind:posts="posts"
			@removePost="deletePost"
		/>
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
