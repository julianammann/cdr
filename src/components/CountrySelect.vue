<template>
  <div>
    <label
      v-if="crisis"
      for="country"
      class="block text-sm font-medium text-gray-700"
      >Bitte wählen Sie das zu unterstützende Land:</label
    >
    <div class="mt-1">
      <select
        :id="id"
        class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        :class="v.$error ? 'border-red-500 text-red-500' : ''"
        @input="$emit('update:modelValue', $event.target.value)"
      >
        <option value="0">Wählen Sie ein Land</option>
        <option
          v-for="country in countries"
          :key="country.code"
          :value="country.code"
        >
          {{ country.name }}
        </option>
      </select>
    </div>
  </div>
  <ErrorDisplay field="Land" :v="v" />
</template>

<script>
import ErrorDisplay from "@/components/ErrorDisplay.vue";

export default {
  /**
   * component name
   */
  name: "CountrySelect",
  /**
   * used components
   */
  components: { ErrorDisplay },
  /**
   * component props
   */
  props: {
    modelValue: String,
    countries: Object,
    crisis: {
      type: Boolean,
      default: false,
    },
    v: {
      type: Object,
      required: true,
    },
    id: String,
  },
};
</script>

<style scoped></style>
