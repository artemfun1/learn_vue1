<template>
	<div class="app">
		<my-button @click="console.log(searchQuery)"> debag </my-button>

		<h1>Страница с постами</h1>

		<my-input v-model:value="searchQuery" placeholder="Поиск" />

		<div class="app__btns">
			<my-button @click="isShow = true"> Добавить пост </my-button>

			<my-select v-model="selectedSort" :options="sortOptions" />
		</div>

		<my-dialog v-model:show="isShow">
			<PostForm @create="createPost" />
		</my-dialog>
		<PostList
			v-if="!isPostLoading"
			v-bind:posts="sortedAndSearched"
			@removePost="deletePost"
		/>
		<div v-else="isPostLoading">Идет загрузка...</div>

		<div ref="observer" class="observer"></div>

		<!-- <div class="page__wrapper">
			<div
				v-for="pageNumber in totalPages"
				:key="pageNumber"
				class="page"
				:class="{
					'current-page': page === pageNumber,
				}"
				:style="{}"
				@click="changePage(pageNumber)"
			>
				{{ pageNumber }}
			</div>
		</div> -->
	</div>
</template>

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
			selectedSort: "",
			searchQuery: "",
			page: 1,
			limit: 5,
			totalPages: 0,
			sortOptions: [
				{ value: "title", name: "По названию" },
				{ value: "body", name: "По содержанию" },
			],
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

				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/posts",
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					}
				);
				this.totalPages = Math.ceil(
					response.headers["x-total-count"] / this.limit
				);
				this.posts = response.data;
				this.isPostLoading = false;
			} catch (e) {
				console.log(e);
			}
		},
		async fetchMorePost() {
			try {
				this.page += 1;

				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/posts",
					{
						params: {
							_page: this.page,
							_limit: this.limit,
						},
					}
				);
				this.totalPages = Math.ceil(
					response.headers["x-total-count"] / this.limit
				);
				this.posts = [...this.posts, ...response.data];
			} catch (e) {
				console.log(e);
			}
		},
		// changePage(n){
		// 	this.page = n
		// }
	},
	mounted() {
		this.fetchPost();

		const options = {
			root: document.querySelector("#scrollArea"),
			rootMargin: "100px",
			threshold: 1.0,
		};

		const callback = (entries, observer) => {
			if (entries[0].isIntersecting && this.page < this.totalPages) {
				this.fetchMorePost();
			}
		};

		const observer = new IntersectionObserver(callback, options);
		observer.observe(this.$refs.observer);
	},
	computed: {
		sortedPosts() {
			return [...this.posts].sort((a, b) =>
				a[this.selectedSort]?.localeCompare(b[this.selectedSort])
			);
		},
		sortedAndSearched() {
			return this.sortedPosts.filter(post =>
				post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
			);
		},
	},
	watch: {
		// page(){
		// 	this.fetchPost();
		// },
		// selectedSort(newValue){
		// 	this.posts.sort((a,b)=>{
		// 		return a[newValue]?.localeCompare(b[newValue])
		// 	})
		// },
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.app {
	padding: 20px;
	& .app__btns {
		margin: 15px 0;
		display: flex;
		justify-content: space-between;
	}
}
.page__wrapper {
	display: flex;
	margin-top: 15px;
	& .page {
		border: 1px solid black;
		padding: 10px;
		margin-right: 5px;
	}
	& .current-page {
		background: rgba(0, 128, 128, 0.436);
	}
}
.observer {
	height: 30px;
	background-color: aquamarine;
}

body {
	background-color: #ffffff;
}
</style>
