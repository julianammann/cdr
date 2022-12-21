<template>
  <div class="relative px-6 lg:px-8">
    <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
      <div v-if="checked === 'onSiteDelivery'">
        <div>
          <h3
            class="text-2xl font-bold tracking-tight sm:text-center sm:text-4xl"
          >
            Vielen Dank für Ihre Spende an das Land: {{ getCountryByCode() }}
          </h3>
          <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            diese umfasst:
            <span :key="index" v-for="(cloth, index) in clothSelection">{{
              cloth
            }}</span>
            <br />
          </p>
        </div>
      </div>
      <div v-else>
        <h3
          class="text-2xl font-bold tracking-tight sm:text-center sm:text-4xl"
        >
          Vielen Dank {{ firstName }} {{ lastName }} für Ihre Spende an das
          Land: {{ getCountryByCode() }}
        </h3>
        <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
          diese umfasst:
          <span :key="index" v-for="(cloth, index) in clothSelection">{{
            cloth
          }}</span>
          <br />
          Wir kommen zur folgenden Adresse: <br />
          {{ street }}<br />
          {{ zip }} {{ city }}<br />

          Wir holen die Spende am
          {{ addDays(Date.now(), Math.floor(Math.random() * 5)) }} zwischen 13
          und 17 Uhr.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useFormStore } from "@/stores/form";

export default {
  /**
   * setup store
   * @returns {{store: *}}
   */
  setup() {
    const store = useFormStore();
    return { store };
  },
  /**
   * initialize data from store
   * @returns {{zip: *, clothSelection: *, country: *, firstName: *, lastName: *, pickUpCountry: *, city: *, street: (string|*), wCountries: Ref<UnwrapRef<[{code: string, name: string},{code: string, name: string},{code: string, name: string},{code: string, name: string},{code: string, name: string},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]>>, checked: *, countries: *, email: *}}
   */
  data() {
    return {
      checked: this.store.checked,
      clothSelection: this.store.clothSelection,
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
  methods: {
    /**
     * getCountryByCode filters the countries after the selected one
     * @returns {String}
     */
    getCountryByCode() {
      const result = this.countries.filter((c) => c.code === this.country);
      return result[0].name;
    },
    /**
     * add Days is a helper function to fake pick up date
     * @param date
     * @param days
     * @returns {string}
     */
    addDays(date, days) {
      let result = new Date(date);
      result.setDate(result.getDate() + days);
      return result.toLocaleDateString("de-DE");
    },
  },
  name: "SuccessView",
};
</script>

<style scoped></style>
