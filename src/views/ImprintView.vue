<template>
  <data-table :items="items">
    <template #tableHeading> Impressum </template>
    <template #tableSubheading>
      Angaben gem&auml;&szlig; &sect; 5 TMG
    </template>
  </data-table>
  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
    <p>
      Quelle:
      <a href="https://www.e-recht24.de" target="_blank">e-recht24.de</a>
    </p>
  </div>
</template>

<script setup>
import DataTable from "@/components/DataTable.vue";

/**
 * data fot data table
 * @type {{address: {values: {street: string, name: string, zip_n_city: string}, title: string}, contacts: {values: {mail: string, phone: string}, title: string}}}
 */
const items = {
  address: {
    title: "Adresse",
    values: {
      name: "Julian Ammann",
      street: "Musterstraße 36",
      zip_n_city: "12345 Musterstadt",
    },
  },
  contacts: {
    title: "Kontakt",
    values: {
      mail: "julian.ammann@clothingdonation.de",
      phone: "+49 (0) 123 44 55 66",
    },
  },
};
</script>

<style scoped></style>
