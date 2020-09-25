import { reactive, watch } from 'vue';
import API from '@/lib/API';

export default function usePosts(subreddit) {
  const postsState = reactive({
    loading: false,
    error: '',
    data: [],
  });

  function loadData() {
    try {
      postsState.loading = true;
      postsState.error = '';
      postsState.data = [];

      postsState.data = await API.getPosts(subreddit);
    } catch (error) {
      postsState.error = error.message || 'Error loading posts';
    } finally {
      postsState.loading = false;
    }
  }

  watch(() => subreddit, loadData, { immediate: true});

  return postsState;
}
