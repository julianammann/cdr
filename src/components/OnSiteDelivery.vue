<template>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Kleidungsart
        </h3>
        <p class="mt-1 text-sm text-gray-600">
          Bitte Beschreiben Sie genau welche Art von Kleidung Sie spenden. Und
          wählen das Land aus was die Spende erhalten soll.
        </p>
      </div>
    </div>

    <div class="mt-5 md:col-span-2 md:mt-0">
      <form @submit.prevent>
        <div class="shadow sm:overflow-hidden sm:rounded-md">
          <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
            <div>
              <label
                for="clothes"
                class="block text-sm font-medium text-gray-700"
                >Kleidungsart</label
              >
              <div class="mt-1 flex rounded-md shadow-sm">
                <textarea
                  id="clothes"
                  name="clothes"
                  rows="3"
                  v-model="this.clothDescription"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                for="country"
                class="block text-sm font-medium text-gray-700"
                >Bitte wählen Sie das zu unterstützende Land:</label
              >
              <div class="mt-1">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="this.country"
                >
                  <option value="0">Choose a country</option>
                  <option
                    v-for="country in store.countries"
                    :key="country.code"
                    :value="country.code"
                  >
                    {{ country.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              @click="routeToSuccess"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useFormStore } from "@/stores/form";

export default {
  setup() {
    const store = useFormStore();
    return { store };
  },
  name: "OnSiteDelivery",
  data() {
    return {
      clothDescription: this.store.clothDescription,
      country: this.store.country,
    };
  },
  methods: {
    routeToSuccess() {
      this.store.$patch({
        country: this.country,
        clothDescription: this.clothDescription,
      });
      this.$router.push("/success");
    },
  },
};
</script>

<style scoped></style>
