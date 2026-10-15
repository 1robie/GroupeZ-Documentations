import MDXComponents from '@theme-original/MDXComponents';
import Since from '@site/src/components/doc/Since';
import PaperOnly from '@site/src/components/doc/PaperOnly';
import WikiLink from '@site/src/components/doc/WikiLink';
import Aliases from '@site/src/components/doc/Aliases';

// Available in every .md and .mdx page without an import.
export default {
  ...MDXComponents,
  Since,
  PaperOnly,
  WikiLink,
  Aliases,
};
