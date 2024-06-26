<template>
	<div>
		<h3>Список пользователей</h3>
		<PostItem v-for="post in posts" :post="post" @deletePost="deletePost" />
	</div>
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
			this.$emit("deletePost", postId);
		},
	},
};
</script>

<style></style>
