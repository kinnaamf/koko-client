import {createI18n} from "vue-i18n";
import {getLocale} from "./utils.js";

import en from "../translations/en.json";
import ro from "../translations/ro.json";

const translations = {
    en, ro
}

const i18n = createI18n({
    legacy: false,
    locale: getLocale(),
    messages: translations
});

export default i18n