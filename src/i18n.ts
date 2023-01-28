import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ko from "./locales/ko.json";

// Type-define 'en-US' as the master schema for the resource
type MessageSchema = typeof en | typeof ko;

const i18n = createI18n<[MessageSchema], "en" | "ko">({
  locale: "ko",
  fallbackLocale: "ko",
  messages: { en, ko },
});

export default i18n;
