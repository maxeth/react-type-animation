# react-type-animation

A customizable React typing animation component.

## Installation

```bash
npm install --save react-type-animation
```

Requires a `react` and `react-dom` version of at least 15.0.0.

## Live Demo

A live demo can be found at: https://react-type-animation.vercel.app/

## Usage

```jsx
import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      cursor={false}
      sequence={[
        'One', 1000, 'Two', 2000, 'Two Three', // Types 'One', waits 1s, Deletes 'One' and types 'Two', waits 2s, writes 'Three' without deleiting 'Two'
        () => {                               
          console.log('Done typing!'); // Place optional callbacks anywhere in the array 
        }
      ]}
      wrapper="h2"
      repeat={Infinity}
    />
  );
};
```

## Important Usage Notes ⚠

### Immutability

Due to the nature of the animation, this component is **immutable once rendered**, which means that **props changes will never be reflected**. Otherwise, the animation would have to be reset completely, which would look unnatural.

Here is an example which shows that you cannot render dynamic prop-values:

```jsx
const [counter, setCounter] = useState(0)
 <TypeAnimation
      // DO NOT RENDER DYNAMIC VALUES!
      sequence={[`${counter}`, 1000, () => {setCounter(counter++)}]} // ANIMATION WILL ALWAYS RENDER 0!
      repeat={Infinity}
    />
```

In the example above, `counter` will always render as "0" within the animation and ignore state changes.

### Hot Reload Bug

Because Hot Reload preserves previous state but re-renders the component, the Animation will start bugging out until you **hard-reload the page**.

Hence, whenever you make changes to the TypeAnimation component, you unfortunately have to reload your page.

### Layout-shift

In order to prevent layout shift caused by the TypeAnimation component's text expanding, when typing long texts, you need to either wrap the TextAnimation component in an HTML element with a fixed width/height which is wider than the maximum expansion of the TypeAnimation element, or make that wrapper's position `absolute`.

## Props

| Prop        | Required | Type    | Example                  | Description                                              | Default |
| ----------- | -------- | ------- | ------------------------ | -------------------------------------------------------- | ------- |
| `sequence`  | yes      | array[] | `['One', 1000, 'Two']`   | Animation Sequence: [TEXT, DELAY-MS, CALLBACK]           | `none`  |
| `wrapper`   | no       | string  | `p`,`h2`,`div`, `strong` | HTML element tag that wraps the Animation                | `div`   |
| `speed`     | no       | number  | `55`, `65`               | Speed Of Animation: The lower the slower                 | `60`    |
| `repeat`    | no       | number  | `3`, `0`, `Infinity`     | Amount of animation repetitions                          | `0`     |
| `cursor`    | no       | boolean | `false`, `true`          | Display default blinking cursor css-animation            | `true`  |
| `className` | no       | string  | `custom-class-name`      | HTML class name applied to the wrapper to style the text | `none`  |

## Custom Cursor Animation

If you want to apply a custom cursor animation, set the `cursor` prop to `false` (which prevents any default css-styles from being applied) and set a custom `className` prop to the TypeAnimation component with your own css styles.

These are the base styles for the cursor animation:

```css
.type::after {
  content: '|';
  animation: cursor 1.1s infinite step-start;
}

@keyframes cursor {
  50% {
    opacity: 0;
  }
}
```

If you want to modify the styles, simply make a styles.css file, copy and modify the styles and pass the prop `className="type"` to apply the custom styles.

If you would like the cursor to stop after a specific time, consider using a JSX styling library which lets you define CSS dynamically within your JSX Component, or simply replace `infnite` with a static finite number (like `2s`) inside your custom css file.
