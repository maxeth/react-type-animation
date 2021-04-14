# react-type-animation

> React wrapper for [typical](https://github.com/camwiegert/typical) with extended functionality.

## Install

```bash
npm install react-type-animation
```

## Usage

```jsx
import TypeAnimation from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      cursor={false}
      sequence={['React typing animation based on typical', 1000, '']}
      loop={0}
      wrapper="h2"
    />
  );
};
```

<img src="https://i.gyazo.com/5bfb50ce017c9e247ae6a909dbcd82ae.gif"/>

## Props

| Prop       | Required | Type    | Example                | Description                                          |
| ---------- | -------- | ------- | ---------------------- | ---------------------------------------------------- |
| `wrapper`  | no       | string  | `p`,`h2`,`div`         | Key of HTML element that animation is wrapped around |
| `sequence` | yes      | []      | `['One', 1000, 'Two']` | Animation steps: [Text, Delay, Text [...]]           |
| `loop`     | no       | number  | `0`, `Infinity`        | Amount of animation repititions                      |
| `cursor`   | no       | boolean | `false`, `true`        | Display blinking cursor in animation                 |
