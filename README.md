# react-type-animation

React type animation based on [typical](https://github.com/camwiegert/typical).

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
      wrapper="h2"
    />
  );
};
```

<img src="https://i.gyazo.com/5bfb50ce017c9e247ae6a909dbcd82ae.gif"/>

## Props

| Prop        | Required | Type    | Example                | Description                                              |
| ----------- | -------- | ------- | ---------------------- | -------------------------------------------------------- |
| `sequence`  | yes      | array[] | `['One', 1000, 'Two']` | Animation sequence: TEXT followed by DELAY-IN-MS         |
| `wrapper`   | no       | string  | `p`,`h2`,`div`         | HTML elements that Animation is wrapped around           |
| `repeat`    | no       | number  | `3`, `Infinity`        | Amount of animation repetitions                          |
| `cursor`    | no       | boolean | `false`, `true`        | Display blinking cursor in animation                     |
| `className` | no       | string  | `custom-class-name`    | HTML class name applied to the wrapper to style the text |
