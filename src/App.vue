<template>
  <div>
    <header class="fixed top-0 z-50 w-full">
      <Navigation />
    </header>
    <main class="relative bg-white shadow h-screen overflow-auto">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-20">
        <!-- Replace with your content -->
        <div id="container" class="px-4 sm:px-0">
          <RouterView />
        </div>
        <!-- /End replace -->
      </div>
    </main>
    <footer class="bg-white shadow fixed bottom-0 z-50 w-full dark:bg-gray-800">
      <AppFooter />
    </footer>
  </div>
</template>

<style scoped></style>

<script setup>
import { RouterView } from "vue-router";
import Navigation from "@/components/AppNavigation.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>
