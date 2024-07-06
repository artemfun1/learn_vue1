<template>
	<div >
		<my-button @click="console.log(3)"> debag </my-button>


		<h1>Страница с постами</h1>

		<!-- <my-input v-focus v-model:value="searchQuery" placeholder="Поиск" /> -->

		<div class="app__btns">
			<my-button @click="isShow = true"> Добавить пост </my-button>

			<!-- <my-select v-model="selectedSort" :options="sortOptions" />
		</div> -->

		<!-- <my-dialog v-model:show="isShow">
			<PostForm @create="createPost" />
		</my-dialog> -->

		<PostList
			v-if="!isPostLoading"
			v-bind:posts="sortedAndSearched"
			@removePost="deletePost"
		/>
		<div v-else="isPostLoading">Идет загрузка...</div>

		<div v-intersection="fetchMorePost" class="observer"></div>

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
import PostForm from "../components/PostForm";
import axios from "axios";
import PostList from "../components/PostList";
import MyButton from "../components/Ui/MyButton.vue";

import {mapState,mapGetters,mapMutations,mapActions}from 'vuex'

export default {
	components: {
		PostList,
		PostForm,
	},
	data() {
		return {
			
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
		
		// changePage(n){
		// 	this.page = n
		// }
	},
	mounted() {
		{{$store.state.post}}
		this.fetchPost();




	},
	computed: {
		
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


.app__btns {
	margin: 15px 0;
	display: flex;
	justify-content: space-between;
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
	background-color: #9f9f9f;
}
</style>
