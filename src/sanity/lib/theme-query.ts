import { loadQuery } from "@/sanity/lib/load-query";
import { THEME_QUERY } from "@/sanity/lib/queries";
import type { ThemeDocument } from "@/lib/theme";

/**
 * Memoized loader for the `theme` singleton.
 *
 * The site is i18n: the shared base layout runs once per page, and the page
 * count is routes × locales. The palette is language-neutral and identical for
 * every locale, so the GROQ round-trip is done once per build instead of once
 * per rendered page. The promise (not the result) is cached, so concurrent
 * first requests share a single in-flight fetch.
 *
 * Not needed at a handful of pages — worth it at routes × locales × N.
 */
let cached: Promise<{ data: ThemeDocument | null }> | null = null;

export const loadTheme = () =>
  (cached ??= loadQuery<ThemeDocument | null>({ query: THEME_QUERY }));
