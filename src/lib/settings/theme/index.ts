import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  scrollBehavior: 'smooth',
  colors: {
    primary: {
      500: '#319795',
    },
    secondary: {
      500: '#edf2f7',
    },
  },
});

export default theme;
