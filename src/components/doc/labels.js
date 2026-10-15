import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const LABELS = {
  en: {
    paperOnly: 'Paper only',
    wiki: 'Minecraft Wiki:',
    alias: (count) => (count > 1 ? 'Aliases:' : 'Alias:'),
  },
  fr: {
    paperOnly: 'Paper uniquement',
    wiki: 'Minecraft Wiki :',
    alias: () => 'Alias :',
  },
};

/** Labels of the doc components in the language of the page being rendered. */
export default function useLabels() {
  const {i18n} = useDocusaurusContext();
  return LABELS[i18n.currentLocale] ?? LABELS.en;
}
