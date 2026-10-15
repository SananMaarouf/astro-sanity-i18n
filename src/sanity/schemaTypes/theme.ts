import { defineField, defineType } from "sanity";

import {
  ADVANCED_GROUP,
  DEFAULT_DARK_PALETTE,
  DEFAULT_LIGHT_PALETTE,
  DEFAULT_RADIUS,
  RADIUS_OPTIONS,
  THEME_GROUPS,
  THEME_TOKENS,
  paletteForFields,
} from "../../lib/theme-tokens";
import { PalettePreview } from "../components/palette-preview";
import { ColorSwatchInput } from "../components/color-swatch-input";

const fieldsetId = (group: string) => group.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const fieldsets = THEME_GROUPS.map((group) => ({
  name: fieldsetId(group),
  title: group,
  options:
    group === ADVANCED_GROUP
      ? // Kept collapsed so the rare tokens (charts, sidebar, gradients)
        // do not bury the handful of colors a project actually changes.
        { columns: 2, collapsible: true, collapsed: true }
      : { columns: 2 },
}));


const HEX_COLOR_RE = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

const paletteFields = THEME_TOKENS.map((token) =>
  defineField({
    name: token.field,
    title: token.label,
    description: token.hint,
    type: "string",
    fieldset: fieldsetId(token.group),
    components: { input: ColorSwatchInput },
    validation: (rule) =>
      rule.custom((value) =>
        !value || HEX_COLOR_RE.test(value)
          ? true
          : "Use a hex color, e.g. #c96442.",
      ),
  }),
);

/**
 * Reusable color palette object, used once for light mode and once for dark
 * mode. Every token gets a starter value, so a freshly created theme document
 * reproduces the template's original look until a color is changed.
 */
export const themePaletteType = defineType({
  name: "themePalette",
  title: "Color palette",
  type: "object",
  fieldsets,
  fields: paletteFields,
  components: { input: PalettePreview },
});

export const themeType = defineType({
  name: "theme",
  title: "Theme",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
      initialValue: "Theme",
    }),
    defineField({
      name: "light",
      title: "Light mode",
      description:
        "Colors used when the site is in light mode. Unset colors fall back to the starter palette.",
      type: "themePalette",
      options: { collapsible: false },
      initialValue: {
        _type: "themePalette",
        ...paletteForFields(DEFAULT_LIGHT_PALETTE),
      },
    }),
    defineField({
      name: "dark",
      title: "Dark mode",
      description:
        "Colors used when the site is in dark mode. Unset colors fall back to the starter palette.",
      type: "themePalette",
      options: { collapsible: false },
      initialValue: {
        _type: "themePalette",
        ...paletteForFields(DEFAULT_DARK_PALETTE),
      },
    }),
    defineField({
      name: "radius",
      title: "Corner radius",
      description: "Rounding applied to buttons, cards and inputs.",
      type: "string",
      options: { list: RADIUS_OPTIONS, layout: "radio" },
      initialValue: DEFAULT_RADIUS,
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Theme" }),
  },
});
