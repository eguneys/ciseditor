import { parseMdFull } from './parser';
import { scrollPreview, updatePreview, renderApp } from './render';

export function app(element, options) {

  let tags;

  let { $wrapper, 
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
            tags = updatePreview(parseMdFull(_), $preview);
          }});

  element.appendChild($wrapper);

}
