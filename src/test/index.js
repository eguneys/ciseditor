import { parseMd, parseParagraph } from '../parser';

export default function() {

  // notation();
  parser();
}

function notation() {

  let paraNotation = parseParagraph(`This is a paragraph <1. d4 d5 2. Nc3 Nc6> another paragraph <3. f3 f6 4. a3 a6> end paragraph.`);

  // console.log(paraNotation);

  let example = parseParagraph(`lkajsfkl jflk <kalsdjf> alksdjf`);

  console.log(example);
  
}

function parser() {

  let paraPly = parseMd(`
laksjf k
=18

`);

  console.log(paraPly);

  let paraStart = parseMd(`This is a paragraph`);

  let heading = parseMd(`#Hello world`);

  let paragraph = parseMd(`  This is a paragraph.`);

  let readme = parseMd(`
# This is a heading

This is a paragraph.
# Headings start with a # symbol

This is a paragraph.

This is multiline paragraph
This is multiline paragraph
This is multiline paragraph


# Another heading
`);

}
