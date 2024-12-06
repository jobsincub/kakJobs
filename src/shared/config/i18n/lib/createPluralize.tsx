/**
 * Creates a pluralization function based on the specified locale.
 *
 * For more details about plural forms, visit:
 * https://safronman.gitbook.io/next-i18n-rree78-ewe#id-10-plural-form.-plyuralnye-mnozhestvennye-formy
 *
 * @param {string} locale - The locale for which pluralization rules are created.
 * @returns {(count: number) => string} - A function that returns the plural form based on the count.
 */
export const createPluralize = (locale: string) => {
  const rules = new Intl.PluralRules(locale)
  return (count: number) => rules.select(count)
}

export const pluralizeRu = createPluralize('ru')
export const pluralizeEn = createPluralize('en')
