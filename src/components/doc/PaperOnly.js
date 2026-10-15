import React from 'react';
import useLabels from './labels';

/** "Paper only" badge, translated for the current locale. */
export default function PaperOnly() {
  const labels = useLabels();
  return <span className="badge badge--danger">{labels.paperOnly}</span>;
}
