// EmbeddableScript.js

import React from 'react';

function EmbeddableScript({ src }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var el = document.createElement("script");
            el.src = "${src}";
            document.body.appendChild(el);
          })();
        `,
      }}
    />
  );
}

export default EmbeddableScript;
