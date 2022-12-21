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
                  <LabelInput
                    name="Vorname"
                    :v="v$.firstName"
                    input-type="text"
                    v-model="firstName"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <LabelInput
                    name="Nachname"
                    :v="v$.lastName"
                    input-type="text"
                    v-model="lastName"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <LabelInput
                    name="E-Mail"
                    :v="v$.email"
                    input-type="email"
                    v-model="email"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <CountrySelect
                    v-model="pickUpCountry"
                    :countries="wCountries"
                    :v="v$.pickUpCountry"
                  />
                </div>

                <div class="col-span-6">
                  <LabelInput
                    name="Straße"
                    :v="v$.street"
                    input-type="text"
                    v-model="street"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                  <LabelInput
                    name="Postleitzahl"
                    :v="v$.zip"
                    input-type="text"
                    v-model="zip"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                  <LabelInput
                    name="Stadt"
                    :v="v$.city"
                    input-type="text"
                    v-model="city"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6">
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
import { checkIfInRange, valueNotZero } from "@/helpers/validation";
import LabelInput from "@/components/LabelInput.vue";
import vSelect from "vue-select";

export default {
  /**
   * component name
   **/
  name: "PickUpService",
  /**
   * used components
   * vSelect is the mulit select component
   * LabelInput for form inputs
   * CountrySelect single select component
   */
  components: { vSelect, LabelInput, CountrySelect },
  /**
   * setup store and validations
   * @returns {{store: *, v$: <Validation>}}
   */
  setup() {
    const store = useFormStore();
    return { store, v$: useVuelidate() };
  },
  /**
   * initialize data from the store
   * @returns {{zip: UnwrapRef<_ExtractStateFromSetupStore<{zip: Ref<UnwrapRef<string>>, clothSelection: Ref<UnwrapRef<[]>>, country: Ref<UnwrapRef<string>>, lastName: Ref<UnwrapRef<string>>, worldCountries: *, pickUpCountry: Ref<UnwrapRef<string>>, city: Ref<UnwrapRef<string>>, countries: *, clothes: *, firstName: Ref<UnwrapRef<string>>, changeChecked: function(*): void, street: Ref<UnwrapRef<string>>, checked: Ref<UnwrapRef<string>>, email: Ref<UnwrapRef<string>>}>["zip"]>, clothSelection: UnwrapRef<_ExtractStateFromSetupStore<{zip: Ref<UnwrapRef<string>>, clothSelection: Ref<UnwrapRef<[]>>, country: Ref<UnwrapRef<string>>, lastName: Ref<UnwrapRef<string>>, worldCountries: *, pickUpCountry: Ref<UnwrapRef<string>>, city: Ref<UnwrapRef<string>>, countries: *, clothes: *, firstName: Ref<UnwrapRef<string>>, changeChecked: function(*): void, street: Ref<UnwrapRef<string>>, checked: Ref<UnwrapRef<string>>, email: Ref<UnwrapRef<string>>}>["clothSelection"]>, country: UnwrapRef<_ExtractStateFromSetupStore<{zip: Ref<UnwrapRef<string>>, clothSelection: Ref<UnwrapRef<[]>>, country: Ref<UnwrapRef<string>>, lastName: Ref<UnwrapRef<string>>, worldCountries: *, pickUpCountry: Ref<UnwrapRef<string>>, city: Ref<UnwrapRef<string>>, countries: *, clothes: *, firstName: Ref<UnwrapRef<string>>, changeChecked: function(*): void, street: Ref<UnwrapRef<string>>, checked: Ref<UnwrapRef<string>>, email: Ref<UnwrapRef<string>>}>["country"]>, lastName: UnwrapRef<_ExtractStateFromSetupStore<{zip: Ref<UnwrapRef<string>>, clothSelection: Ref<UnwrapRef<[]>>, country: Ref<UnwrapRef<string>>, lastName: Ref<UnwrapRef<string>>, worldCountries: *, pickUpCountry: Ref<UnwrapRef<string>>, city: Ref<UnwrapRef<string>>, countries: *, clothes: *, firstName: Ref<UnwrapRef<string>>, changeChecked: function(*): void, street: Ref<UnwrapRef<string>>, checked: Ref<UnwrapRef<string>>, email: Ref<UnwrapRef<string>>}>["lastName"]>, pickUpCountry: UnwrapRef<_ExtractStateFromSetupStore<{zip: Ref<UnwrapRef<string>>, clothSelection: Ref<UnwrapRef<[]>>, country: Ref<UnwrapRef<string>>, lastName: Ref<UnwrapRef<string>>, worldCountries: *, pickUpCountry: Ref<UnwrapRef<string>>, city: Ref<UnwrapRef<string>>, countries: *, clothes: *, firstName: Ref<UnwrapRef<string>>, changeChecked: function(*): void, street: Ref<UnwrapRef<string>>, checked: Ref<UnwrapRef<string>>, email: Ref<UnwrapRef<string>>}>["pickUpCountry"]>, city: UnwrapRef<_ExtractStateFromSetupStore<{zip: Ref<UnwrapRef<string>>, clothSelection: Ref<UnwrapRef<[]>>, country: Ref<UnwrapRef<string>>, lastName: Ref<UnwrapRef<string>>, worldCountries: *, pickUpCountry: Ref<UnwrapRef<string>>, city: Ref<UnwrapRef<string>>, countries: *, clothes: *, firstName: Ref<UnwrapRef<string>>, changeChecked: function(*): void, street: Ref<UnwrapRef<string>>, checked: Ref<UnwrapRef<string>>, email: Ref<UnwrapRef<string>>}>["city"]>, wCountries: any, countries: any, clothes: any, firstName: UnwrapRef<_ExtractStateFromSetupStore<{zip: Ref<UnwrapRef<string>>, clothSelection: Ref<UnwrapRef<[]>>, country: Ref<UnwrapRef<string>>, lastName: Ref<UnwrapRef<string>>, worldCountries: *, pickUpCountry: Ref<UnwrapRef<string>>, city: Ref<UnwrapRef<string>>, countries: *, clothes: *, firstName: Ref<UnwrapRef<string>>, changeChecked: function(*): void, street: Ref<UnwrapRef<string>>, checked: Ref<UnwrapRef<string>>, email: Ref<UnwrapRef<string>>}>["firstName"]>, street: UnwrapRef<_ExtractStateFromSetupStore<{zip: Ref<UnwrapRef<string>>, clothSelection: Ref<UnwrapRef<[]>>, country: Ref<UnwrapRef<string>>, lastName: Ref<UnwrapRef<string>>, worldCountries: *, pickUpCountry: Ref<UnwrapRef<string>>, city: Ref<UnwrapRef<string>>, countries: *, clothes: *, firstName: Ref<UnwrapRef<string>>, changeChecked: function(*): void, street: Ref<UnwrapRef<string>>, checked: Ref<UnwrapRef<string>>, email: Ref<UnwrapRef<string>>}>["street"]>, isTouched: boolean, email: UnwrapRef<_ExtractStateFromSetupStore<{zip: Ref<UnwrapRef<string>>, clothSelection: Ref<UnwrapRef<[]>>, country: Ref<UnwrapRef<string>>, lastName: Ref<UnwrapRef<string>>, worldCountries: *, pickUpCountry: Ref<UnwrapRef<string>>, city: Ref<UnwrapRef<string>>, countries: *, clothes: *, firstName: Ref<UnwrapRef<string>>, changeChecked: function(*): void, street: Ref<UnwrapRef<string>>, checked: Ref<UnwrapRef<string>>, email: Ref<UnwrapRef<string>>}>["email"]>}}
   */
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
      countries: this.store.countries,
    };
  },
  computed: {
    /**
     * computed styles for vSelect for validation
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
     * validates form
     * updates the store
     * routes to success View
     * @returns {Promise<void>}
     */
    async routeToSuccess() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;

      this.store.$patch({
        country: this.country,
        clothSelection: this.clothSelection.map((cloth) => cloth.label),
        pickUpCountry: this.pickUpCountry,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        street: this.street,
        city: this.city,
        zip: this.zip,
      });
      this.$router.push("/success");
    },
  },
  /**
   * vuelidate validations
   * @returns {{zip: {checkIfInRange: (function(*): boolean), required: ValidationRuleWithoutParams}, firstName: {required: ValidationRuleWithoutParams}, lastName: {required: ValidationRuleWithoutParams}, country: {valueNotZero: (function(*): boolean), required: ValidationRuleWithoutParams}, clothSelection: {required: ValidationRuleWithoutParams}, city: {required: ValidationRuleWithoutParams}, pickUpCountry: {valueNotZero: (function(*): boolean), required: ValidationRuleWithoutParams}, street: {required: ValidationRuleWithoutParams}, email: {required: ValidationRuleWithoutParams, email: ValidationRuleWithoutParams}}}
   **/
  validations() {
    return {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      zip: { required, checkIfInRange },
      street: { required },
      city: { required },
      country: { required, valueNotZero },
      pickUpCountry: { required, valueNotZero },
      clothSelection: { required },
    };
  },
};
</script>

<style scoped></style>
