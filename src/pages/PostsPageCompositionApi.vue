<template>
<div>
    <h1>Страница с постами</h1>
    <my-input
      v-model="searchQuery"
      placeholder="Поиск...."
      v-focus
    />
    <div class="app__btns">
      <my-button
      >
        Создать пост
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form
      />
    </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/Ui/MyButton.vue";
import usePosts from "../hooks/usePost";
import useSortedAndSearchedPosts from "../hooks/useSortedAndSearchedPosts";
import useSortedPosts from "../hooks/useSortedPosts";

export default {
	components: {
		PostList,
		PostForm,
	},
	data() {
		return {
 dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
		};
	},
	setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    }
  }
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
