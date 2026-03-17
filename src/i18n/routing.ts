import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales } from "../config";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
  localePrefix: "as-needed",
  // Used when no locale matches
  defaultLocale,
  localeDetection: false,
});
