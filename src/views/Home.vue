<template>
  <div class="home">
    <div vi-if="loading" class="progress green lighten-3">
      <div class="indeterminate green"></div>
    </div>

    <div v-if="error" class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">{{}}</span>
      </div>
    </div>
    
    <div v-for="post in posts" :key="post.id">

    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import usePosts from '@/hooks/usePosts';
export const postsState = usePosts('all');
export const posts = computed(() => postsState.data.map((child) => child.data))
</script>