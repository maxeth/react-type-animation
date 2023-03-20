# react-type-animation

A customizable React typing animation component.

## Installation

```bash
npm install react-type-animation
```

or

```bash
yarn add react-type-animation
```

Requires a `react` and `react-dom` version of at least 15.0.0.

## Live Demo

A live demo of the animation can be found at: [https://react-type-animation.netlify.app/examples](https://react-type-animation.netlify.app/examples).

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
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};
```

## Documentation

The docs with props, options and common problem solutions can be found at: [https://react-type-animation.netlify.app/](https://react-type-animation.netlify.app/).

## Migrating to v3

The default wrapper is now `<span>` instead of `<div>`: **To migrate**, add a `display: inline-block/block` or `wrapper="div"` to all `<TypeAnimation/>` occurances with unspecified wrapper.

## Usage Notes

### Immutability

Due to the nature of the animation, this component is **permanently memoized**, which means that the component **never** re-renders unless you hard-reload the page, and hence **props changes will not be reflected**.

### Hot Reload NOT Supported

Because the TypeAnimation component is memoized and **never** re-rendered (see above), yet Hot Reload attempts to re-render the component, **changes to the TypeAnimation component will not render until you hard-reload the page**.

Hence, whenever you make changes to the TypeAnimation component, you unfortunately have to reload your page.

## Props

See [https://react-type-animation.netlify.app/options](https://react-type-animation.netlify.app/options) for more details.

| Prop                    | Required | Type                                                         | Example                                           | Description                                              | Default |
| ----------------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------- | -------------------------------------------------------- | ------- |
| `sequence`              | yes      | Array<number &#124; string &#124; () => void>                | `['One', 1000, 'Two', () => console.log("done")]` | Animation sequence: [TEXT, DELAY-MS, CALLBACK]           | `-`     |
| `wrapper`               | no       | string                                                       | `p`,`h2`,`div`, `strong`                          | HTML element tag that wraps the typing animation         | `span`  |
| `speed`                 | no       | 1,2,..,99 &#124; {type: "keyStrokeDelayInMs", value: number} | `45`, `{type: "keyStrokeDelayInMs", value: 100}`  | Speed for the writing of the animation                   | `40`    |
| `deletionSpeed`         | no       | 1,2,..,99 &#124; {type: "keyStrokeDelayInMs", value: number} | `45`, `{type: "keyStrokeDelayInMs", value: 100}`  | Speed for deleting of the animation                      | `speed` |
| `omitDeletionAnimation` | no       | boolean                                                      | `false`, `true`                                   | If true, deletions will be instant and without animation | `false` |
| `repeat`                | no       | number                                                       | `0`, `3`, `Infinity`                              | Amount of animation repetitions                          | `0`     |
| `cursor`                | no       | boolean                                                      | `false`, `true`                                   | Display default blinking cursor css-animation            | `true`  |
| `className`             | no       | string                                                       | `custom-class-name`                               | HTML class name applied to the wrapper to style the text | `-`     |
| `style`                 | no       | object                                                       | `{fontSize: '2em'}`                               | JSX inline style object                                  | `-`     |
| `ref`                   | no       | HTMLElement &#124; null                                      | `-`                                               | `-`                                                      | `-`     |

---

[npm](https://www.npmjs.com/package/react-type-animation) / [github](https://github.com/maxeth/react-type-animation/)
Credits: [typical](https://github.com/camwiegert/typical)
Shoutouts/Supporters: [blockig](https://www.blockig.com/)
