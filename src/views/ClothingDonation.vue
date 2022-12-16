<template>
  <div>
    <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
      Bitte wählen Sie ob Sie vor Ort sind oder die Kleider abholen lassen
      wollen:
    </h3>
    <ul
      class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <li
        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
      >
        <div class="flex items-center pl-3">
          <input
            id="horizontal-list-radio-license"
            type="radio"
            value="onSiteDelivery"
            name="list-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            v-model="store.checked"
            @change="store.changeChecked('onSiteDelivery')"
            :checked="store.checked === 'onSiteDelivery'"
          />

          <label
            for="horizontal-list-radio-license"
            class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >Übergabe an der Geschäftsstelle</label
          >
        </div>
      </li>
      <li
        class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
      >
        <div class="flex items-center pl-3">
          <input
            id="horizontal-list-radio-id"
            type="radio"
            value="pickUpService"
            name="list-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            v-model="store.checked"
            @change="store.changeChecked('pickUpService')"
            :checked="store.checked === 'pickUpService'"
          />
          <label
            for="horizontal-list-radio-id"
            class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >Abholservice</label
          >
        </div>
      </li>
    </ul>

    <div v-if="store.checked === 'onSiteDelivery'">
      <FormSpacer />
      <OnSiteDelivery />
    </div>
    <div v-else>
      <FormSpacer />

      <PickUpService />

      <FormSpacer />
    </div>
  </div>
</template>
<style scoped></style>

<script>
import { useFormStore } from "@/stores/form";
import PickUpService from "@/components/PickUpService.vue";
import FormSpacer from "@/components/FormSpacer.vue";
import OnSiteDelivery from "@/components/OnSiteDelivery.vue";

export default {
  setup() {
    const store = useFormStore();
    return { store };
  },
  name: "ClothingDonation",
  components: { OnSiteDelivery, FormSpacer, PickUpService },
};
</script>
