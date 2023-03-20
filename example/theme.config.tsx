import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
  // logo: <TypeAnimation repeat={0} sequence={['react-type-animation']} />,
  darkMode: false,
  logo: (
    <TypeAnimation
      className="bg-blue-200 dark:bg-blue-600 px-2"
      speed={25}
      sequence={[
        'react-tyep',
        275,
        'react-typ',
        50,
        'react-type',
        50,
        'react-type-animatino',
        250,
        'react-type-animatin',
        350,
        'react-type-animation',
      ]}
    />
  ),

  project: {
    link: 'https://github.com/maxeth/react-type-animation',
  },
  docsRepositoryBase: 'https://github.com/maxeth/react-type-animation/example',
  feedback: {
    useLink: () => 'https://github.com/maxeth/react-type-animation/issues/new',
    content: () => <span>Report bugs & provide feedback →</span>,
  },

  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – React Type Animation',
      };
    } else {
      return {
        titleTemplate: 'Get Started - React Type Animation',
      };
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:title"
        content="React Type Animation - A typing animation for React"
      />
      <meta
        property="og:description"
        content="react-type-animation is an open-source, customizable typing animation for React based on typical."
      />
      <meta
        property="description"
        content="react-type-animation is an open-source, customizable typing animation for React based on typical."
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  ),

  footer: {
    component: (
      <footer
        className="w-full border-t dark:border-dark-border mt-5 flex justify-center items-end"
        style={{ paddingTop: '70px', paddingBottom: '50px' }}
      >
        <div className="text-xs text-gray-600 dark:text-gray-400 flex items-center justify-center gap-x-1">
          <a
            className="underline"
            href="https://github.com/maxeth/react-type-animation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          /
          <a
            className="underline"
            href="https://www.npmjs.com/package/react-type-animation"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm
          </a>
          /
          <span>
            Shoutouts & Supporters:{' '}
            <a
              className="underline"
              href="https://www.blockig.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              blockig
            </a>
          </span>
        </div>
      </footer>
    ),
    // text: (
    //   <div style={{ display: 'flex' }}>
    //     <a href="https://nextra.site" target="_blank">
    //       Other
    //     </a>

    //     <a
    //       href="https://nextra.site"
    //       target="_blank"
    //       style={{ marginLeft: '8px' }}
    //     >
    //       blockig
    //     </a>
    //   </div>
    // ),
  },
};

export default config;
