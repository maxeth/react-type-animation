import type { SequenceElement, StringSplitter } from './components/TypeAnimation/index.types';
import { Wrapper } from './components/TypeAnimation/index.types';

const OP_CODE_DELETION = 'DELETE';
const OP_CODE_WRITING = 'WRITING';

export async function type(
  node: HTMLElementTagNameMap[Wrapper],
  splitter: StringSplitter,
  speed: number,
  deletionSpeed: number,
  omitDeletionAnimation: boolean,
  ...args: ReadonlyArray<SequenceElement | typeof type>
) {
  for (const arg of args) {
    switch (typeof arg) {
      case 'string':
        await nodeEditor(node, splitter, arg, speed, deletionSpeed, omitDeletionAnimation);
        break;
      case 'number':
        await wait(arg);
        break;
      case 'function':
        // when typeloop is passed from the TypeAnimation component, this causes an infinite, recursive call-loop here
        await arg(node, splitter, speed, deletionSpeed, omitDeletionAnimation, ...args);
        break;
      default:
        await arg;
    }
  }
}

async function nodeEditor(
  node: HTMLElementTagNameMap[Wrapper],
  splitter: StringSplitter,
  text: string,
  speed: number,
  deletionSpeed: number,
  omitDeletionAnimation: boolean
) {
  const nodeContent = node.textContent || '';

  const overlap = getOverlap(nodeContent, text);
  await perform(
    node,
    [...deleter(nodeContent, splitter, overlap), ...writer(text, splitter, overlap)],
    speed,
    deletionSpeed,
    omitDeletionAnimation
  );
}

async function wait(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function perform(
  node: HTMLElementTagNameMap[Wrapper],
  edits: ReadonlyArray<string>,
  speed: number,
  deletionSpeed: number,
  omitDeletionAnimation: boolean
) {
  let filteredEdits = edits;
  if (omitDeletionAnimation) {
    let slicePoint = 0;
    // Find the end-state of the deletion sequence which is either the beginning of a new, longer string, or the empty string
    for (let i = 1; i < edits.length; i++) {
      const [prev, curr] = [edits[i - 1], edits[i]];
      if (curr.length > prev.length || curr === '') {
        slicePoint = i;
        break;
      }
    }
    filteredEdits = edits.slice(slicePoint, edits.length); //  slice the array from the end-state string onwards, so that the deletion-animation gets omitted as a result
  }
  for (const op of editor(filteredEdits)) {
    const waitingTime =
      op.opCode(node) === OP_CODE_WRITING
        ? speed + speed * (Math.random() - 0.5)
        : deletionSpeed + deletionSpeed * (Math.random() - 0.5);
    op.op(node);
    await wait(waitingTime);
  }
}

function* editor(edits: ReadonlyArray<string>) {
  for (const edit of edits) {
    yield {
      op: (node: HTMLElementTagNameMap[Wrapper]) => requestAnimationFrame(() => (node.textContent = edit)),

      opCode: (node: HTMLElementTagNameMap[Wrapper]) => {
        const nodeContent = node.textContent || '';

        return edit === '' || nodeContent.length > edit.length
          ? OP_CODE_DELETION
          : OP_CODE_WRITING;
      }
    };
  }
}

function* writer(text: string, splitter: StringSplitter, startIndex = 0) {
  const splitText = splitter(text);
  const endIndex = splitText.length;

  while (startIndex < endIndex) {
    yield splitText.slice(0, ++startIndex).join('');
  }
}

function* deleter(text: string, splitter: StringSplitter, startIndex = 0) {
  const splitText = splitter(text);
  let endIndex = splitText.length;

  while (endIndex > startIndex) {
    yield splitText.slice(0, --endIndex).join('');
  }
}

function getOverlap(start: string, [...end]: string) {
  return [...start, NaN].findIndex((char, i) => end[i] !== char);
}
