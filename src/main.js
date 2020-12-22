import throttle from './throttle';
import { scrollPreview, renderApp } from './render';

import ChessMd from 'chessm';
// import { md } from 'chessmd';
// let { parseMdFull, updatePreview } = md;

export function app(element, options = {}) {

  let { input: fInput, content = '' } = options;

  if (!fInput) {
    fInput = () => {};
  }

  let tags = {};

  let { $wrapper, 
        $editor,
        $preview } = renderApp({
          content,
          caret: caret => {
            let tag;

            for (let _ in tags) {
              let _tag = tags[_];
              if (_tag.pos < caret) {
                tag = _tag;
              } else {
                break;
              }
            }

            if (tag) {
              scrollPreview($preview, tag.$_);
            }
          },
          input: throttle(2000, _ => {
            fInput(_);
            // tags = updatePreview(parseMdFull(_), $preview);

            let toRemove = [];
            let $_ = $preview.firstChild;
            while ($_) {
              toRemove.push($_);
              $_ = $_.nextSibling;
            }

            for (let $_ of toRemove) $preview.removeChild($_);

            ChessMd($preview, { md: _ });
          })});

  $editor.firstChild.value = content;
  //tags = updatePreview(parseMdFull($editor.firstChild.value), $preview);
  ChessMd($preview, { md: $editor.firstChild.value });

  element.appendChild($wrapper);

}
