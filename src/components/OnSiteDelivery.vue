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
            <ClothingDetails v-model="clothDescription" />
            <CountrySelect
              v-model="this.country"
              :countries="store.countries"
              :crisis="true"
            />
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
import ClothingDetails from "@/components/ClothingDetails.vue";
import CountrySelect from "@/components/CountrySelect.vue";

export default {
  components: { CountrySelect, ClothingDetails },
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
