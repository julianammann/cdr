<script setup>
import IconHome from "@/components/icons/IconHome.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
</script>

<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Impressum</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">Angaben gem&auml;&szlig; &sect; 5 TMG</p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900"><icon-home class="inline-flex mr-3"/>Adresse</dt>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Julian Ammann</dd>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Musterstraße 36</dd>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">12345 Musterstadt</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-900"><icon-phone class="inline-flex mr-3" />Kontakt</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">julian.ammann@clothingdonation.de</dd>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">+49 (0) 123 44 55 66</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped></style>