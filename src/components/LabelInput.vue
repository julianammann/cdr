<template>
  <label
    :for="name.toLowerCase()"
    class="block text-sm font-medium text-gray-700"
    :class="v.$error ? 'text-red-500' : ''"
    >{{ name }} *</label
  >
  <input
    :type="inputType"
    :name="name.toLowerCase()"
    :id="name.toLowerCase()"
    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    :class="v.$error ? 'border-red-500' : ''"
    @blur="v.$touch"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <ErrorDisplay :field="name" :v="v" />
</template>

<script>
import ErrorDisplay from "@/components/ErrorDisplay.vue";

export default {
  /**
   * component name
   */
  name: "LabelInput",
  /**
   * used components
   */
  components: { ErrorDisplay },
  /**
   * props for component
   */
  props: {
    v: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
    modelValue: String,
  },
};
</script>

<style scoped></style>
