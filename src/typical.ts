export async function type(node: any, speed: number, ...args: any) {
  for (const arg of args) {
    switch (typeof arg) {
      case 'string':
        await edit(node, arg, speed);
        break;
      case 'number':
        await wait(arg);
        break;
      case 'function':
        await arg(node, speed, ...args);
        break;
      default:
        await arg;
    }
  }
}

async function edit(node: any, text: any, speed: number) {
  const overlap = getOverlap(node.textContent, text);
  await perform(
    node,
    [...deleter(node.textContent, overlap), ...writer(text, overlap)],
    speed
  );
}

async function wait(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function perform(node: any, edits: any, speed: number) {
  for (const op of editor(edits)) {
    op(node);
    await wait(speed + speed * (Math.random() - 0.5));
  }
}

function* editor(edits: any) {
  for (const edit of edits) {
    yield (node: any) => requestAnimationFrame(() => (node.textContent = edit));
  }
}

function* writer([...text], startIndex = 0, endIndex = text.length) {
  while (startIndex < endIndex) {
    yield text.slice(0, ++startIndex).join('');
  }
}

function* deleter([...text], startIndex = 0, endIndex = text.length) {
  while (endIndex > startIndex) {
    yield text.slice(0, --endIndex).join('');
  }
}

function getOverlap(start: any, [...end]) {
  return [...start, NaN].findIndex((char, i) => end[i] !== char);
}
