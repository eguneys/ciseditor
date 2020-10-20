import { fSeq, objMap, objForeach } from './outil';
import { fAttribute, tag, textNode, fListen } from './dom';
import { Code, Text, Ply, Paragraph, Heading } from './parser';

export function renderApp({ input, caret }) {

  let editEvents = fSeq
  ([fListen('input', (_, e) => {
    caret(e.target.selectionStart);
    input(_.value);
  }),
    // https://stackoverflow.com/a/12721005/3994249
    // fListen('scroll', _ => scroll((_.scrollTop + _.offsetHeight) / _.scrollHeight))
   ]);

  let $editor = tag('ch-editor', [
    tag('textarea', [], editEvents)
  ]);

  let $preview = tag('ch-preview');

  let $wrapper = tag('ch-wrap',
                     [$editor,
                      $preview]);

  return {
    $wrapper,
    $editor,
    $preview
  };
}

export function scrollPreview($preview, $el) {
  let bounds = $preview.getBoundingClientRect();
  $preview.scrollTop = $el.offsetTop - bounds.width * 0.3;
}

export function updatePreview(model, $preview) {

  let toRemove = [];
  let $_ = $preview.firstChild;
  while ($_) {
    toRemove.push($_);
    $_ = $_.nextSibling;
  }

  for (let $_ of toRemove) $preview.removeChild($_);

  let tags = model.map(({ type, content, pos }) => {
    return {
      pos,
      $_: createPTag(type, content, pos)
    };
  });

  tags.forEach(_ => {
    $preview.appendChild(_.$_);
  });

  return tags;
}

function createParagraph(content) {
  return tag(`p`, content.map(({ type, content }) => {
    switch (type) {
    case Code:
      return tag('span', [], fAttribute({ 'data-line': content }));
      break;
    case Text:
      return textNode(content);
      break;
    default:
      return null;
      break;
    }
  }));
}

function createPly(content) {
  return tag('div', [], fAttribute({ 'data-ply': content }));
}

function createPTag(type, content) {
  switch (type) {
  case Ply:
    return createPly(content);
    break;
  case Paragraph:
    return createParagraph(content);
    break;
  case Heading:
    return tag('h2', content);
    break;
  default:
    return null;
    break;
  }
}
