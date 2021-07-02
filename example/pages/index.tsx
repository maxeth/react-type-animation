import TypeAnimation from 'react-type-animation';
import SyntaxHighlighter from 'react-syntax-highlighter';

const Home = () => {
  return (
    <div
      style={{ minHeight: '100vh', minWidth: '95vw' }}
      className="flex flex-col items-center py-12 space-y-8 overflow-x-hidden"
    >
      <div>
        <div className="font-bold h-8 text-lg">
          <TypeAnimation
            cursor={false}
            sequence={['This text will be repeated infinitely.', 1000, '']}
            wrapper="h2"
            repeat={Infinity}
          />
        </div>
        <div className="text-base" style={{ width: '45em' }}>
          <SyntaxHighlighter language="javascript">
            {`
       <TypeAnimation
        cursor={false}
        sequence={['This text will be repeated infinitely.', 1000, '']}
        wrapper="h2"
        repeat={Infinity}
       />
      `}
          </SyntaxHighlighter>
        </div>
      </div>

      <div>
        <div className="font-bold h-7 text-lg">
          <TypeAnimation
            cursor={true}
            sequence={[
              'This animation',
              2000,
              'Will write',
              2000,
              'A sequence three times.',
            ]}
            wrapper="h2"
            repeat={3}
          />
        </div>
        <div className="text-base" style={{ width: '45em' }}>
          <SyntaxHighlighter language="javascript">
            {`
       <TypeAnimation
        cursor={true}
        sequence={[
          'This animation',
          2000,
          'Will write',
          2000,
          'A sequence three times.',
        ]}
        wrapper="a"
        repeat={3}
       />
      `}
          </SyntaxHighlighter>
        </div>
      </div>

      <div>
        <div
          className="font-bold text-4xl h-12 mb-4 bg-red-100"
          style={{ width: '20em' }}
        >
          <TypeAnimation
            cursor={true}
            sequence={[
              'Pre-define width of wrapper',
              2000,
              'to prevent layout-shift.',
              2000,
            ]}
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
            cursor={true}
            sequence={[
              'Pre-define width of wrapper',
              2000,
              'to prevent layout-shift.',
              2000,
            ]}
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
    </div>
  );
};

export default Home;
