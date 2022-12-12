import { ref } from "vue";
import { defineStore } from "pinia";

export const useFormStore = defineStore("form", () => {
  let checked = ref("onSiteDelivery");
  const clothDescription = ref("");
  const country = ref("0");

  // https://www.auswaertiges-amt.de/de/ReiseUndSicherheit/10.2.8Reisewarnungen
  // Country List from 12.12.2022
  const countries = ref([
    { name: "Afghanistan", code: "AF" },
    { name: "Ägypten", code: "EG" },
    { name: "Algerien", code: "DZ" },
    { name: "Armenien", code: "AM" },
    { name: "Aserbaidschan", code: "AZ" },
    { name: "Äthiopien", code: "ET" },
    { name: "Belarus", code: "BY" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Côte d'Ivoire", code: "CI" },
    { name: "Demokratische Republik Kongo", code: "CD" },
    { name: "Eritrea", code: "ER" },
    { name: "Haiti", code: "HT" },
    { name: "Irak", code: "IQ" },
    { name: "Iran", code: "IR" },
    { name: "Japan", code: "JP" },
    { name: "Jemen", code: "YE" },
    { name: "Kamerun", code: "CM" },
    { name: "Libanon", code: "LB" },
    { name: "Libyen", code: "LY" },
    { name: "Mali", code: "ML" },
    { name: "Mauretanien", code: "MR" },
    { name: "Mosambik", code: "MZ" },
    { name: "Myanmar", code: "MM" },
    { name: "Nigeria", code: "NG" },
    { name: "Niger", code: "NE" },
    { name: "Pakistan", code: "PK" },
    { name: "Palästinensische Gebiete", code: "PS" },
    { name: "Philippinen", code: "PH" },
    { name: "Russische Föderation", code: "RU" },
    { name: "Somalia", code: "SO" },
    { name: "Südsudan", code: "SS" },
    { name: "Syrien", code: "SY" },
    { name: "Tadschikistan", code: "TJ" },
    { name: "Tschad", code: "TD" },
    { name: "Ukraine", code: "UA" },
    { name: "Venezuela", code: "VE" },
    { name: "Zentralafrikanische Republik", code: "CF" },
  ]);

  const changeChecked = (value) => {
    checked.value = value;
  };
  const changeCountry = (value) => {
    country.value = value;
  };

  return {
    checked,
    changeChecked,
    clothDescription,
    country,
    changeCountry,
    countries,
  };
});
