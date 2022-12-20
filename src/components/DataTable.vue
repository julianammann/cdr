<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">
        <slot name="tableHeading"></slot>
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        <slot name="tableSubheading"></slot>
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <DataTableItem
          v-for="item in items"
          :values="item.values"
          :key="item"
          :title="item.title"
        ></DataTableItem>
      </dl>
    </div>
  </div>
</template>

<script>
import DataTableItem from "@/components/DataTableItem.vue";

export default {
  components: { DataTableItem },
  props: {
    items: Object,
  },
};
</script>

<style scoped></style>

