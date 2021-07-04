# react-type-animation

Customizable React typing animation component.

## Install

```bash
npm install react-type-animation
```

Requires a ```react``` and ```react-dom``` version of at least 15.0.0.

## Live Demo

A live demo can be found at: https://react-type-animation.vercel.app/

## Usage

```jsx
import TypeAnimation from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      cursor={false}
      sequence={['React typing animation based on typical', 1000, '']}
      wrapper="h2"
    />
  );
};
```

## Important Usage Notes ⚠

### Hot-Reload Bug

When using hot-reload, the type animation will most likely be bugged until you hard-reload the page.
Until this issue is resolved, **you need to hard-reload the page after ever code change** in order to see the animation in a non-bugged state.

### Layout-shift

In order to prevent layout shift caused by the type animation's text HTML-element expanding, you need to either wrap the TextAnimation component in a div that has a fixed width/height which is wider than the maximum expansion of the TypeAnimation element, or make that wrapper div's position `absolute`.


## Props


| Prop        | Required | Type    | Example                | Description                                              |
| ----------- | -------- | ------- | ---------------------- | -------------------------------------------------------- |
| `sequence`  | yes      | array[] | `['One', 1000, 'Two']` | Animation sequence: TEXT followed by DELAY-IN-MS         |
| `wrapper`   | no       | string  | `p`,`h2`,`div`         | HTML elements that Animation is wrapped around           |
| `repeat`    | no       | number  | `3`, `Infinity`        | Amount of animation repetitions                          |
| `cursor`    | no       | boolean | `false`, `true`        | Display blinking cursor css-animation                    |
| `className` | no       | string  | `custom-class-name`    | HTML class name applied to the wrapper to style the text |


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
