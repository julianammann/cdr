<template>
  <div v-if="v.$error">
    <span
      v-for="error in v.$errors"
      :key="error.$uid"
      class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
    >
      <b v-if="error.$validator === 'checkIfInRange'">
        Leider können wir Ihre Kleiderspende nicht entgegen nehmen da Sie zu
        weit von unserer Hauptstelle wohnen.
      </b>
      <b v-if="error.$validator === 'required'">
        {{ field }} ist ein Pflichtfeld bitte ausfüllen!
      </b>
    </span>
  </div>
</template>

<script>
export default {
  /**
   * component name
   */
  name: "ErrorDisplay",
  /**
   * component props
   */
  props: {
    v: {
      type: Object,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
