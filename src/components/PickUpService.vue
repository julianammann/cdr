<template>
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Abholadresse
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Bitte geben Sie Ihre Adressinformationen ein damit wir die
            Kleiderspende abholen können.
          </p>
        </div>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <form @submit.prevent>
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    :class="v$.firstName.$error ? 'text-red-500' : ''"
                  >Vorname *</label
                  >
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    :class="v$.firstName.$error ? 'border-red-500' : ''"
                    v-model="firstName"
                    @blur="v$.firstName.$touch"
                  />
                  <ErrorDisplay field="Vorname" :v="v$.firstName" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    :class="v$.lastName.$error ? 'text-red-500' : ''"
                  >Nachname *</label
                  >
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    :class="v$.lastName.$error ? 'border-red-500' : ''"
                    v-model="lastName"
                    @blur="v$.lastName.$touch"
                  />
                  <ErrorDisplay field="Nachname" :v="v$.lastName" />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    :class="v$.email.$error ? 'text-red-500' : ''"
                  >E-Mail *</label
                  >
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    :class="v$.email.$error ? 'border-red-500' : ''"
                    @blur="v$.email.$touch"
                    v-model="email"
                  />
                  <ErrorDisplay field="E-Mail" :v="v$.email" />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <CountrySelect
                    v-model="pickUpCountry"
                    :countries="wCountries"
                    :v="v$.pickUpCountry"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    :class="v$.street.$error ? 'text-red-500' : ''"
                  >Straße *</label
                  >
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autocomplete="street-address"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    :class="v$.street.$error ? 'border-red-500' : ''"
                    @blur="v$.street.$touch"
                    v-model="street"
                  />
                  <ErrorDisplay field="Straße" :v="v$.street" />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                  <label
                    for="postal-code"
                    class="block text-sm font-medium text-gray-700"
                    :class="v$.zip.$error ? 'text-red-500' : ''"
                  >Postleitzahl *</label
                  >
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    :class="v$.zip.$error ? 'border-red-500' : ''"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    v-model="zip"
                  />
                  <ErrorDisplay field="Postleitzahl" :v="v$.zip" />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                  <label
                    for="city"
                    class="block text-sm font-medium text-gray-700"
                    :class="v$.city.$error ? 'text-red-500' : ''"
                  >Stadt *</label
                  >
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autocomplete="address-level2"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    :class="v$.city.$error ? 'border-red-500' : ''"
                    v-model="city"
                  />
                  <ErrorDisplay field="Stadt" :v="v$.city" />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <Multiselect
                    mode="tags"
                    v-model="clothSelection"
                    :options="clothes"
                    :close-on-select="false"
                    :create-option="true"
                  />
                </div>
                <div class="col-span-6 sm:col-span-6">
                  <CountrySelect
                    :crisis="true"
                    :countries="countries"
                    v-model="country"
                    :v="v$.country"
                  />
                </div>
              </div>
            </div>

            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                @click="routeToSuccess()"
              >
                Absenden
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useFormStore } from "@/stores/form";
import { useVuelidate } from "@vuelidate/core";
import CountrySelect from "@/components/CountrySelect.vue";
import { required, email } from "@vuelidate/validators";
import Multiselect from "@vueform/multiselect";
import ErrorDisplay from "@/components/ErrorDisplay.vue";
import { checkIfInRange, valueNotZero } from "@/validation";

export default {
  setup() {
    const store = useFormStore();
    return { store, v$: useVuelidate() };
  },
  data() {
    return {
      clothSelection: this.store.clothSelection,
      clothes: this.store.clothes,
      country: this.store.country,
      pickUpCountry: this.store.pickUpCountry,
      firstName: this.store.firstName,
      lastName: this.store.lastName,
      email: this.store.email,
      street: this.store.street,
      city: this.store.city,
      zip: this.store.zip,
      wCountries: this.store.worldCountries,
      countries: this.store.countries
    };
  },
  methods: {
    async routeToSuccess() {
      const isFormCorrect = await this.v$.$validate();
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) return;

      this.store.$patch({
        country: this.country,
        clothSelection: this.clothSelection,
        pickUpCountry: this.pickUpCountry,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        street: this.street,
        city: this.city,
        zip: this.zip
      });
      this.$router.push("/success");
    },
  },
  validations() {
    return {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      zip: { required, checkIfInRange },
      street: { required },
      city: { required },
      country: { required, valueNotZero },
      pickUpCountry: { required, valueNotZero }
    };
  },
  name: "PickUpService",
  components: { ErrorDisplay, Multiselect, CountrySelect }
};
</script>
