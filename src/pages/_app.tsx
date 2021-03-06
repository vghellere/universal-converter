import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/react';

import { init } from 'lib/utils/ga';
import theme from 'lib/settings/theme';

const metaTags = [
  {
    name: 'viewport',
    content:
      'width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no',
  },
  {
    name: 'Content-Security-Policy',
    content: 'upgrade-insecure-requests',
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    init('G-SFF4Y675Q8');
  }, []);

  return (
    <>
      <NextSeo
        title='Universal Converter'
        description='Universal Converter tools - calculators, tables, formulas, math. Temperature, weight, area, volume, length.'
        canonical='https://www.universalconverter.org/'
        additionalMetaTags={metaTags}
      />
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next {
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default MyApp;
