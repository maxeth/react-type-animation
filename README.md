# react-type-animation

A customizable React typing animation component.

## Installation

```bash
npm install --save react-type-animation
```

Requires a `react` and `react-dom` version of at least 15.0.0.

## Live Demo & Examples

A live demo can be found at: https://react-type-animation.vercel.app/

## Usage

```jsx
import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'One', // Types 'One'
        1000, // Waits 1s
        'Two', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Two Three', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
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

| Prop        | Required | Type    | Example                  | Description                                                 | Default |
| ----------- | -------- | ------- | ------------------------ | ----------------------------------------------------------- | ------- |
| `sequence`  | yes      | array[] | `['One', 1000, 'Two']`   | Animation Sequence: [TEXT, DELAY-MS, CALLBACK]              | `none`  |
| `wrapper`   | no       | string  | `p`,`h2`,`div`, `strong` | HTML element tag that wraps the Animation                   | `div`   |
| `speed`     | no       | number  | `45`, `75`               | Speed Of Animation: **between 1-100**, The lower the slower | `60`    |
| `repeat`    | no       | number  | `0`, `3`, `Infinity`     | Amount of animation repetitions                             | `0`     |
| `cursor`    | no       | boolean | `false`, `true`          | Display default blinking cursor css-animation               | `true`  |
| `className` | no       | string  | `custom-class-name`      | HTML class name applied to the wrapper to style the text    | `none`  |
| `style`     | no       | object  | `{fontSize: '2em'}`      | JSX inline style object                                     | `none`  |

## Custom Cursor Animation

If you wish to apply a custom cursor animation, set the `cursor` prop to `false` (**which prevents any default css-styles from being applied**) and set a custom `className` prop to the TypeAnimation component with your own css style classes.

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

If you wish to modify the styles, also set the `cursor` prop to `false` and simply create and import any css file (or `FILE_NAME.module.css` if using css modules), copy and modify the above styles and pass the prop `className="type"` (or `className={styles.type}` if using css modules) to the `TypeAnimation` component to apply the custom styles.

If you would like the cursor to stop after a specific time, consider using a JSX styling library which lets you define CSS dynamically within your JSX Component, or simply replace `infinite` with a static finite number (like `2s`) inside your custom css file.
