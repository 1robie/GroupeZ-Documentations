import React from 'react';
import useLabels from './labels';

const WIKI_URL = 'https://minecraft.wiki/w/Data_component_format';

/**
 * Link to a data component on the Minecraft Wiki, for example `<WikiLink id="tooltip_display" />`.
 * Use `anchor` when the wiki heading differs from the displayed `id`.
 */
export default function WikiLink({id, anchor}) {
  const labels = useLabels();
  return (
    <p>
      <strong>{labels.wiki}</strong> <a href={`${WIKI_URL}#${anchor ?? id}`}>{id}</a>
    </p>
  );
}
