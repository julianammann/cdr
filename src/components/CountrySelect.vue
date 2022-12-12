<template>
  <select
    id="countries"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    v-model="this.country"
  >
    <option value="0">Choose a country</option>
    <option
      v-for="country in this.countries"
      :key="country.code"
      :value="country.code"
    >
      {{ country.name }}
    </option>
  </select>

</template>

<script>
export default {
  name: "CountrySelect",
  props: {
    countries: Object,
    country: String,
  },
};
</script>

<style scoped></style>
