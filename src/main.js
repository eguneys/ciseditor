import { parseMdFull } from './parser';
import { scrollPreview, updatePreview, renderApp } from './render';
import ChessMd from 'chessmd';

export function app(element, options = {}) {

  let { input: fInput } = options;

  if (!fInput) {
    fInput = () => {};
  }

  let tags;

  let { $wrapper, 
        $editor,
        $preview } = renderApp({
          // scroll: _ => {
          //   $preview.scrollTop = _ * $preview.scrollHeight - $preview.offsetHeight;
          // },
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
          input: _ => {
            fInput(_);
            tags = updatePreview(parseMdFull(_), $preview);
            try {
              ChessMd($preview, {});
            } catch (e) {}
          }});

  element.appendChild($wrapper);

}
