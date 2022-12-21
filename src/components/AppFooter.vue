<template>
  <div
    class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-white"
      >© {{ year }} Julian Ammann. All Rights Reserved.</span
    >
    <ul
      class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <li v-for="item in navigation" :key="item.name">
        <RouterLink
          :to="item.href"
          active-class="text-black underline dark:text-white"
          class="mr-4 hover:underline md:mr-6"
          >{{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
/**
 * year function to get the current year
 * @type {number}
 */
const year = new Date().getFullYear();

/**
 * returns links for navigation
 * @type {[{name: string, href: string},{name: string, href: string}]}
 */
const navigation = [
  { name: "Impressum", href: "/imprint" },
  { name: "Datenschutz", href: "/data-protection" },
];
</script>

<style scoped></style>
