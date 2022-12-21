<template>
  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dt class="text-sm font-medium text-gray-900">{{ title }}</dt>
  </div>
  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <dd
      v-for="value in values"
      :key="value"
      class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
      v-html="value"
    />
  </div>
</template>

<script>
export default {
  /**
   * component props
   */
  props: {
    values: Object,
    title: String,
  },
};
</script>

<style scoped></style>
