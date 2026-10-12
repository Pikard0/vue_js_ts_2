<script setup lang="ts">import {useRouter} from 'vue-router';import {useAuthStore} from '@/stores/auth';const auth=useAuthStore();const router=useRouter();function logout(){auth.logout();router.push('/login')}</script>
<template>
  <header class="header">
    <div class="container header-inner">
      <RouterLink class="logo" to="/"><span>✦</span> Vue Lottery</RouterLink>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About author</RouterLink>
        <RouterLink to="/users">Users</RouterLink>
        <button v-if="auth.isAuthenticated" class="link-button" @click="logout">Logout</button>
        <RouterLink v-else to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>
</template>
