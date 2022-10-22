const OP_CODE_DELETION = 'DELETE';
const OP_CODE_WRITING = 'WRITING';

export async function type(
  node: any,
  speed: number,
  deletionSpeed: number,
  ...args: any
) {
  for (const arg of args) {
    switch (typeof arg) {
      case 'string':
        await edit(node, arg, speed, deletionSpeed);
        break;
      case 'number':
        await wait(arg);
        break;
      case 'function':
        await arg(node, speed, deletionSpeed, ...args); // when typeloop is passed from the TypeAnimation component, this causes an infinite, recursive call-loop here
        break;
      default:
        await arg;
    }
  }
}

async function edit(
  node: any,
  text: any,
  speed: number,
  deletionSpeed: number
) {
  const overlap = getOverlap(node.textContent, text);
  await perform(
    node,
    [
      ...deleter(node.textContent, overlap),
      // ...nullifier(node.textContent, overlap),
      ...writer(text, overlap)
    ],
    speed,
    deletionSpeed
  );
}

async function wait(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function perform(
  node: any,
  edits: any,
  speed: number,
  deletionSpeed: number
) {
  for (const op of editor(edits)) {
    op.op(node);
    const waitingTime =
      op.opCode(node) === OP_CODE_WRITING
        ? speed + speed * (Math.random() - 0.5)
        : deletionSpeed + deletionSpeed * (Math.random() - 0.5);

    await wait(waitingTime);
  }
}

function* editor(edits: any) {
  for (const edit of edits) {
    yield {
      op: (node: any) => requestAnimationFrame(() => (node.textContent = edit)),
      opCode: (node: any) =>
        edit === '' || node.textContent > edit
          ? OP_CODE_DELETION
          : OP_CODE_WRITING
    };
  }
}

function* writer([...text], startIndex = 0, endIndex = text.length) {
  while (startIndex < endIndex) {
    yield text.slice(0, ++startIndex).join('');
  }
}

function* deleter(
  [...text],
  startIndex = 0,
  // omitAnimation: boolean,
  endIndex = text.length
) {
  // if (omitAnimation) {
  //   yield text.slice(0, startIndex);
  // }
  // else {

  // }
  while (endIndex > startIndex) {
    yield text.slice(0, --endIndex).join('');
  }
}

// function* nullifier([...text]) {
//   yield '';
// }

function getOverlap(start: any, [...end]) {
  return [...start, NaN].findIndex((char, i) => end[i] !== char);
}
