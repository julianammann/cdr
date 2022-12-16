<template>
  <div>
    <label for="clothes" class="block text-sm font-medium text-gray-700">
      Kleidungsart
    </label>
    <div class="mt-1 flex rounded-md shadow-sm">
      <textarea
        id="clothes"
        name="clothes"
        rows="3"
        @input="$emit('update:modelValue', $event.target.value)"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ClothingDetails",
};
</script>

<style scoped></style>
