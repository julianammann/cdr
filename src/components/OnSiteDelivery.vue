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
            <vSelect
              v-model="clothSelection"
              multiple
              label="label"
              :options="clothes"
              @click="v$.clothSelection.$touch()"
              :style="vSelectStyle"
            >
              <template #header>
                <div
                  class="block text-sm font-medium text-gray-700"
                  :class="v$.clothSelection.$error ? 'text-red-500' : ''"
                >
                  Wählen Sie die Kleidungsart *
                </div>
              </template>
            </vSelect>
            <CountrySelect
              v-model="country"
              :countries="store.countries"
              :crisis="true"
              :v="v$.country"
            />
          </div>
          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              @click="routeToSuccess"
            >
              Absenden
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import { useFormStore } from "@/stores/form";
import CountrySelect from "@/components/CountrySelect.vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { valueNotZero } from "@/helpers/validation";

export default {
  /**
   * used components
   */
  components: { vSelect, CountrySelect },
  /**
   * sets up store and validations
   * @returns {{store: *, v$: <Validation>}}
   */
  setup() {
    const store = useFormStore();
    return { store, v$: useVuelidate() };
  },
  /**
   * component name
   */
  name: "OnSiteDelivery",
  /**
   * initialize data from store
   * @returns {{clothSelection: any, country: any, clothes: any}}
   */
  data() {
    return {
      clothSelection: this.store.clothSelection,
      clothes: this.store.clothes,
      country: this.store.country,
    };
  },
  computed: {
    /**
     * style for multiselect component
     * @returns {string}
     */
    vSelectStyle() {
      return this.v$.clothSelection.$error
        ? "--vs-border-color: rgb(239 68 68 / 1)"
        : "--vs-border-color: rgb(209 213 219 / 1);";
    },
  },
  methods: {
    /**
     * checks validation
     * updates the store
     * route to success view
     * @returns {Promise<void>}
     */
    async routeToSuccess() {
      const isFormCorrect = await this.v$.$validate();
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return;

      this.store.$patch({
        country: this.country,
        clothSelection: this.clothSelection.map((cloth) => cloth.label),
      });
      this.$router.push("/success");
    },
  },
  validations() {
    return {
      country: { required, valueNotZero },
      clothSelection: { required },
    };
  },
};
</script>
