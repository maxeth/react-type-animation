import React, { useRef, useState } from 'react';
import TypeAnimation from '../TypeAnimation';
import { TypeAnimation as RawTypeAnimation } from 'react-type-animation-local';

export function CallbackExample() {
  const [typingStatus, setTypingStatus] = useState('Initializing');

  return (
    <>
      <div className="font-bold text-lg">
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
          repeat={Infinity}
        />
      </div>
      <div className="mt-2">
        typingStatus:{' '}
        <span className="text-lg text-red-800 font-bold">{typingStatus}</span>
      </div>
    </>
  );
}

export function LandingPageExample() {
  return (
    <div className="font-bold text-lg">
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
        speed={50}
        style={{ fontSize: '2em' }}
        repeat={Infinity}
      />{' '}
    </div>
  );
}

export function ContinuationExample() {
  return (
    <TypeAnimation
      sequence={[
        'One',
        500,
        'One Two',
        500,
        'One Two Three',
        500,
        'One Two',
        500,
        'One',
        500,
        '',
        500,
      ]}
      style={{ fontSize: '2em' }}
      // speed={60} <- default
      repeat={Infinity}
    />
  );
}

export function ReplacementExample() {
  return (
    <TypeAnimation
      sequence={['One', 500, 'Two', 500, 'Three', 500]}
      style={{ fontSize: '2em' }}
      // speed={60} <- default
      repeat={Infinity}
    />
  );
}

export function MultipleLinesExample() {
  return (
    <div className="font-bold text-lg">
      <TypeAnimation
        style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
        sequence={[
          `Line one\nLine Two\nLine Three\nLine Four\nLine Five

Line Eight`,
          1000,
          '',
        ]}
        repeat={Infinity}
      />
    </div>
  );
}

export function StateManipulationColorExample() {
  const [textColor, setTextColor] = useState('red');

  return (
    <>
      <div
        className="w-full bg-blue-400 bg-opacity-10 p-3 rounded-lg h-[45px] text-[1.75rem]"
        style={{
          color: textColor,
          fontSize: '35px',
        }}
      >
        <RawTypeAnimation
          sequence={[
            'One',
            800,
            () => setTextColor('aqua'),
            'One Two',
            800,
            () => setTextColor('deeppink'),
            'One Two Three',
            1000,
            () => setTextColor('darkkhaki'),
            '',
          ]}
          repeat={Infinity}
        />
      </div>
      <button
        onClick={() => {
          const items = [
            'blue',
            'green',
            'purple',
            'pink',
            'brown',
            'darkmagenta',
            'darksalmon',
            'dodgerblue',
            'firebrick',
            'darkviolet',
          ];
          setTextColor(items[Math.floor(Math.random() * items.length)]);
        }}
        className="border rounded-lg bg-gray-100 dark:bg-gray-600 p-3 mt-3"
      >
        Change Color
      </button>
    </>
  );
}

export function ForwardRefExample() {
  const ref = React.createRef<HTMLSpanElement>(); // HTMLSpanElement because in this example we set wrapper="span"

  const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

  const showCursorAnimation = (show: boolean) => {
    if (!ref.current) {
      return;
    }

    const el = ref.current;
    if (show) {
      el.classList.add(CURSOR_CLASS_NAME);
    } else {
      el.classList.remove(CURSOR_CLASS_NAME);
    }
  };

  return (
    <>
      <span className="w-full block bg-blue-400 bg-opacity-10 p-3 rounded-lg">
        <RawTypeAnimation
          ref={ref}
          cursor={false}
          style={{
            fontSize: '1.75rem',
          }}
          className={CURSOR_CLASS_NAME}
          sequence={[
            'One',
            800,
            'One Two',
            800,
            'One Two Three',
            () => showCursorAnimation(false),
            2000,
            () => showCursorAnimation(true),
            '',
          ]}
          repeat={Infinity}
        />
      </span>
      {/* Works the same with simple css classes or css modules */}
      <style global jsx>{`
        .custom-type-animation-cursor::after {
          content: '|';
          animation: cursor 1.1s infinite step-start;
        }
        @keyframes cursor {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

export function CustomSpeedExample() {
  return (
    <>
      <div className="font-bold text-lg">
        <TypeAnimation
          sequence={['Type faster or slower by setting speed.', 1000, '']}
          speed={75} // Must be in range between 1 and 99!
          repeat={Infinity}
        />
      </div>
      <div className="text-gray-500">{'speed={75}'}</div>
      <div className="font-bold  text-lg mt-5">
        <TypeAnimation
          sequence={['Type faster or slower by setting speed.', 1000, '']}
          speed={45}
          repeat={Infinity}
        />
      </div>
      <div className="text-gray-500">{'speed={40} (default)'}</div>
      <div className="font-bold  text-lg mt-5">
        <TypeAnimation
          sequence={['Type faster or slower by setting speed.', 1000, '']}
          speed={{ type: 'keyStrokeDelayInMs', value: 250 }}
          repeat={Infinity}
        />
      </div>
      <div className="text-gray-500">
        {"speed={type: 'keyStrokeDelayInMs', value: 250}"}
      </div>
      <div className="font-bold  text-lg mt-5">
        <TypeAnimation
          sequence={['Delete faster or slower by setting speed.', 1000, '']}
          deletionSpeed={90}
          repeat={Infinity}
        />
      </div>
      <div className="text-gray-500">{'deletionSpeed={90}'}</div>{' '}
      <div className="font-bold  text-lg mt-5">
        <TypeAnimation
          sequence={[
            'Delete...',
            200,
            '...without...',
            200,
            '...animation.',
            1500,
            '',
          ]}
          omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <div className="text-gray-500">{'omitDeletionAnimation={true}'}</div>{' '}
    </>
  );
}

export function SpanCollapsingExample() {
  return (
    <div
      className="w-full border-blue-400 bg-blue-400 bg-opacity-10 p-3 rounded-lg text-[1.75rem]"
      style={{
        fontSize: '28px',
        height: '100px',
      }}
    >
      <RawTypeAnimation
        style={{ height: '200px', border: 'solid 1px rgb(0,0,0)' }} // height not being applied
        sequence={[
          'By default, inline elements automatically expand and cause layout shift.',
          800,
          '',
        ]}
        repeat={Infinity}
      />
    </div>
  );
}

export function DisplayBlockCollapsingExample() {
  return (
    <div
      className="w-full bg-blue-400 bg-opacity-10 p-3 rounded-lg text-[1.75rem]"
      style={{
        fontSize: '28px',
      }}
    >
      <RawTypeAnimation
        style={{
          height: '200px',
          width: '300px',
          display: 'block',
          border: 'solid 1px rgb(0,0,0)',
          // wordBreak: 'break-all',
        }} // height being applied
        sequence={['Some long sentence that wraps.', 800, '']}
        repeat={Infinity}
      />
    </div>
  );
}

export function WordBreakExample(props: any) {
  return (
    <div
      className="w-full flex gap-x-8 flex-wrap bg-blue-400 bg-opacity-10 p-3 rounded-lg text-[1.75rem]"
      style={{
        fontSize: '28px',
      }}
    >
      <div>
        <div className="text-base">default:</div>
        <RawTypeAnimation
          style={{
            height: '200px',
            width: '200px',
            display: 'block',
            border: 'solid 1px rgb(0,0,0)',
          }}
          sequence={['Some long sentence and_some_long_word.', 800, '', 800]}
          repeat={Infinity}
        />
      </div>
      <div>
        <div className="text-base">word-break: break-all</div>
        <RawTypeAnimation
          style={{
            height: '200px',
            width: '200px',
            border: 'solid 1px rgb(0,0,0)',
            display: 'block',
            wordBreak: 'break-all',
          }}
          sequence={['Some long sentence and_some_long_word.', 800, '', 800]}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
