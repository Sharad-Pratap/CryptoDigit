import { extendTheme } from '@chakra-ui/react';

// Custom color palette with modern, unique colors
const colors = {
  brand: {
    50: '#e0f7ff',
    100: '#b8e7ff',
    200: '#8dd0ff',
    300: '#61b8ff',
    400: '#3b9eff',
    500: '#1c7eff', // primary color
    600: '#0e63e6',
    700: '#0048cc',
    800: '#0034a3',
    900: '#00216b',
  },
  accent: {
    50: '#f0ffea',
    100: '#daffc9',
    200: '#b8ff9c',
    300: '#8dff65',
    400: '#65ff30',
    500: '#45e600', // accent color
    600: '#36b300',
    700: '#258000',
    800: '#134d00',
    900: '#001a00',
  },
  dark: {
    50: '#edf1fc',
    100: '#d0d8ea',
    200: '#b3bfdd',
    300: '#95a6d0',
    400: '#778dc3',
    500: '#5d74aa',
    600: '#485b85',
    700: '#334160',
    800: '#1f283c',
    900: '#0b0f19', // dark background
  },
};

// Custom font configuration
const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Inter', sans-serif",
};

// Custom component styles
const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'xl',
    },
    variants: {
      primary: {
        bg: 'brand.500',
        color: 'white',
        _hover: {
          bg: 'brand.600',
        },
      },
      secondary: {
        bg: 'accent.500',
        color: 'white',
        _hover: {
          bg: 'accent.600',
        },
      },
      outline: {
        border: '2px solid',
        borderColor: 'brand.500',
        color: 'brand.500',
      },
    },
  },
  Card: {
    baseStyle: {
      p: '6',
      bg: 'white',
      borderRadius: '2xl',
      boxShadow: 'lg',
    },
  },
};

// Theme config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, fonts, components, config });

export default theme; 