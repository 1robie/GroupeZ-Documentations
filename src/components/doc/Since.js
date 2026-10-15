import React from 'react';

/**
 * Minecraft version badge, for example `<Since v="1.21.5" />` renders "1.21.5+".
 * Pass `plus={false}` for a version that is not an open-ended minimum.
 */
export default function Since({v, plus = true}) {
  return <span className="badge badge--danger">{plus ? `${v}+` : v}</span>;
}
