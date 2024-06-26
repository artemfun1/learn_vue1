<template>
	<div v-show="posts.length > 0">
		<h3>Список постов</h3>
		<PostItem
			v-for="post in posts"
			:post="post"
			@deletePost="deletePost"
			:key="post.id"
		/>

	</div>

	<h2 v-show="posts.length === 0" style="color: red">Список постов пуст</h2>
	
</template>

<script>
import PostItem from "@/components/PostItem";

export default {
	components: {
		PostItem,
	},
	props: {
		posts: {
			type: Array,
			required: true,
		},
	},
	methods: {
		deletePost(postId) {
			this.$emit("removePost", postId);
		},
	},
};
</script>

<style></style>
