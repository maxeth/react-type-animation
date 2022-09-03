import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { TypeAnimation } from 'react-type-animation';

const Divider = () => <div className="h-1 bg-gray-200 w-full" />;

const Home = () => {
  const [typingStatus, setTypingStatus] = useState('Initializing');

  return (
    <div
      style={{ minHeight: '100vh', minWidth: '95vw' }}
      className="flex flex-col items-center py-12 space-y-14 overflow-x-hidden"
    >
      <div>
        <div className="font-bold h-8 text-lg">
          <TypeAnimation
            sequence={[
              'We produce food for Mice',
              1000,
              'We produce food for Hamsters',
              1000,
              'We produce food for Guinea Pigs',
              1000,
              'We produce food for Chinchillas',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
          />{' '}
        </div>

        <div className="text-base" style={{ width: '45em' }}>
          <SyntaxHighlighter language="javascript">
            {`
<TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'We produce food for Mice',
    1000,
    'We produce food for Hamsters',
    1000,
    'We produce food for Guinea Pigs',
    1000,
    'We produce food for Chinchillas',
    1000,
    ]}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '2em' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />

      `}
          </SyntaxHighlighter>
        </div>
      </div>
      <Divider />
      <div>
        <div className="font-bold h-8 text-lg">
          <TypeAnimation
            sequence={[
              'One',
              1000,
              'One Two',
              1000,
              'One Two Three',
              1000,
              'One Two',
              1000,
              'One',
              1000,
              '',
              1000,
            ]}
            style={{ fontSize: '2em' }}
            // speed={60} <- default
            wrapper="h2"
            repeat={Infinity}
          />
        </div>

        <div className="text-base" style={{ width: '45em' }}>
          <SyntaxHighlighter language="javascript">
            {`
<TypeAnimation
    sequence={['One', 1000, 'One Two', 1000, 'One Two Three',
               1000, 'One Two', 1000, 'One', 1000, '', 500 ]}
                   //  Continuing previous Text
    style={{ fontSize: '2em' }}
    wrapper="div"
    repeat={Infinity} 
  />
      `}
          </SyntaxHighlighter>
        </div>
      </div>
      <Divider />
      <div>
        <div className="font-bold h-8 text-lg">
          <TypeAnimation
            sequence={['One', 1000, 'Two', 1000, 'Three', 1000]}
            style={{ fontSize: '2em' }}
            wrapper="h2"
            repeat={Infinity}
          />
        </div>

        <div className="text-base" style={{ width: '45em' }}>
          <SyntaxHighlighter language="javascript">
            {`
<TypeAnimation
    sequence={['One', 1000, 'Two', 1000, 'Three', 1000]}
                   //  Replacing previous Text
    style={{ fontSize: '2em' }}
    wrapper="h2"
    repeat={Infinity}
  />
      `}
          </SyntaxHighlighter>
        </div>
      </div>
      <Divider />
      <div>
        <div className="font-bold h-8 text-lg">
          <TypeAnimation
            sequence={['Type faster or slower by setting speed.', 1000, '']}
            speed={75} // Must be in range between 1 and 99!
            wrapper="h2"
            repeat={Infinity}
          />
        </div>
        <div className="text-gray-500">Speed: 75</div>

        <div className="font-bold h-8 text-lg mt-5">
          <TypeAnimation
            sequence={['Type faster or slower by setting speed.', 1000, '']}
            speed={60}
            wrapper="h2"
            repeat={Infinity}
          />
        </div>
        <div className="text-gray-500">Speed: 60</div>

        <div className="font-bold h-8 text-lg mt-5">
          <TypeAnimation
            sequence={['Type faster or slower by setting speed.', 1000, '']}
            speed={45}
            wrapper="h2"
            repeat={Infinity}
          />
        </div>
        <div className="text-gray-500">Speed: 40 (default)</div>

        <div className="text-base" style={{ width: '45em' }}>
          <SyntaxHighlighter language="javascript">
            {`
<TypeAnimation
    sequence={['Type faster or slower by setting speed.', 1000, '']}
    speed={75} // Must be in range between 1 and 99!
    wrapper="h2"
    repeat={Infinity}
  />
      `}
          </SyntaxHighlighter>
        </div>
      </div>
      <Divider />
      <div>
        <div className="font-bold h-8 text-lg">
          <TypeAnimation
            sequence={[
              1500,
              () => {
                setTypingStatus('Typing...');
              },
              'Use callback-functions to trigger events',
              () => {
                setTypingStatus('Done Typing');
              },
              1000,
              () => {
                setTypingStatus('Deleting...');
              },

              '',
              () => {
                setTypingStatus('Done Deleting');
              },
            ]}
            speed={70}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        Current Status:{' '}
        <span className="text-lg text-red-800 font-bold">{typingStatus}</span>
        <div className="text-base" style={{ width: '49em' }}>
          <SyntaxHighlighter language="javascript">
            {`
const [typingStatus, setTypingStatus] = useState('Initializing');

<TypeAnimation
sequence={[
      1500,
      () => {
        setTypingStatus('Typing...');
      },
      'Use callback-functions to trigger events',
      () => {
       setTypingStatus('Done Typing');
      },
      1000,
      () => {
        setTypingStatus('Deleting...');
      },
      '',
      () => {
        setTypingStatus('Done Deleting');
      },
     ]}
    speed={70}
    wrapper="div"
    repeat={Infinity}
  />
      `}
          </SyntaxHighlighter>
          <div className="mt-4 text-center" style={{ width: '40em' }}>
            Use Callback-Functions at any place inside of your animation
            sequence to perform any (global) actions you want. An exemplary
            use-case for this is triggering some state-changes to let your
            application know at which state of typing the animation currently
            is, and adjusting some other visual elements accordingly.
          </div>
        </div>
      </div>
      <Divider />
      <div>
        <div className="font-bold h-8 text-lg">
          <TypeAnimation
            sequence={[
              'Performing Async Operation...',
              () => {
                // await someFunction(), in practice this could take any time.
                return new Promise((resolve) => setTimeout(resolve, 3000));
              },
              'Done!',
              1000,
            ]}
            speed={70}
            wrapper="div"
            repeat={Infinity}
          />
        </div>

        <div className="text-base" style={{ width: '49em' }}>
          <SyntaxHighlighter language="javascript">
            {`

<TypeAnimation
    sequence={[
      'Performing Async Operation...',
      () => {
        // e.g. return fetch("https://test.com"), will be awaited 
        return new Promise((resolve) => setTimeout(resolve, 3000));
      },
      'Done!',
    ]}
    speed={70}
    wrapper="div"
    repeat={Infinity}
    />
      `}
          </SyntaxHighlighter>
          <div className="mt-4 text-center" style={{ width: '40em' }}>
            If you return a Promise from your callback function, it will be
            awaited. For example, you can await an API call simply by returning
            the Promise from your fetch-function. An exemplary use-case for this
            is giving users feedback on completion of async opeartions like API
            calls, similar to a loading bar.
          </div>
        </div>
      </div>
      <Divider />

      <div>
        <div
          className="font-bold text-4xl h-12 mb-4 bg-red-100"
          style={{ width: '20em' }}
        >
          <TypeAnimation
            cursor={false}
            sequence={[
              'Pre-define width of wrapper',
              2000,
              'to prevent layout-shift.',
              2000,
            ]}
            speed={60}
            wrapper="h2"
            repeat={Infinity}
          />
        </div>
        <div className="text-base">
          <SyntaxHighlighter language="javascript">
            {`
// pre-define the width of wrapper to prevent layout shift!
<div style={{ width: '20em' }} >

  <TypeAnimation
    cursor={false}
    sequence={[
    'Pre-define width of wrapper',
    2000,
    'to prevent layout-shift.',
    2000,
     ]}
    speed={60}
    wrapper="h2"
    repeat={Infinity}
      />

</div>
      `}
          </SyntaxHighlighter>
        </div>
        <div className="mt-4 text-center" style={{ width: '40em' }}>
          As you can see with the red background, it is recommended to
          pre-define the div's width and hight that wraps the TypeAnimation
          component to prevent layout-shift. Make sure to make the parent div
          that wraps the TypeAnimation component at least a bit wider than the
          maximum expansion of the text. This can get complicated when
          considering responsive design, but there is no other way to prevent
          the layout-shift besides setting the position of the wrapper to
          "absolute".
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Home;
