import axios from "axios";

export const postModule = {
	state: () => ({
		posts: [],
		isPostLoading: false,
		selectedSort: "",
		searchQuery: "",
		page: 1,
		limit: 5,
		totalPages: 0,
		sortOptions: [
			{ value: "title", name: "По названию" },
			{ value: "body", name: "По содержанию" },
		],
	}),
	getters: {
		sortedPosts(state) {
			return [...state.posts].sort((a, b) =>
				a[state.selectedSort]?.localeCompare(b[state.selectedSort])
			);
		},
		sortedAndSearched(state, getter) {
			return getter.sortedPosts.filter(post =>
				post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
			);
		},
	},
	mutations: {
		setPosts(state, posts) {
			state.posts = posts;
		},
		setIsPostLoading(state, bool) {
			state.isPostLoading = bool;
		},
		setSelectedSort(state, string) {
			state.selectedSort = string;
		},
		setSearchQuery(state, string) {
			console.log('setSearchQuery')
			state.searchQuery = string;
		},
		setPage(state, page) {
			state.page = page;
		},
		setLimit(state, limit) {
			state.limit = limit;
		},
		setTotalPages(state, totalPages) {
			state.totalPages = totalPages;
		},
	},
	actions: {
		async fetchPost({ state, commit }) {
			try {
				commit("setIsPostLoading", true);

				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/posts",
					{
						params: {
							_page: state.page,
							_limit: state.limit,
						},
					}
				);

				commit(
					"setTotalPages",
					Math.ceil(response.headers["x-total-count"] / state.limit)
				);

				commit("setPosts", response.data);

				commit("setIsPostLoading", false);
			} catch (e) {
				console.log(e);
			}
		},
		async fetchMorePost({ state, commit }) {
			try {
				commit("setPage", (state.page += 1));

				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/posts",
					{
						params: {
							_page: state.page,
							_limit: state.limit,
						},
					}
				);
				commit(
					"setTotalPages",
					Math.ceil(response.headers["x-total-count"] / state.limit)
				);
				commit("setPosts", [...state.posts, ...response.data]);
			} catch (e) {
				console.log(e);
			}
		},
	},
	namespaced: true,
};
