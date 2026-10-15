import React from 'react';
import useLabels from './labels';

/** Lists the alternative spellings a key accepts, for example `<Aliases keys={['open_requirement']} />`. */
export default function Aliases({keys}) {
  const labels = useLabels();
  return (
    <p>
      <strong>{labels.alias(keys.length)}</strong>{' '}
      {keys.map((key, index) => (
        <React.Fragment key={key}>
          {index > 0 && ', '}
          <code>{key}</code>
        </React.Fragment>
      ))}
    </p>
  );
}
