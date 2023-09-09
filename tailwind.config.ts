import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '4rem',
        'xl': '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      coreColors: {
        primary: '#20C3AF',
        secondary: '#C2511F',
      },
      light: {
        primary: '#006B5F',
        onPrimary: '#FFFFFF',
        primaryContainer: '#6BF9E3',
        onPrimaryContainer: '#00201C',
        primaryFixed: '#6BF9E3',
        onPrimaryFixed: '#00201C',
        primaryFixedDim: '#49DCC7',
        onPrimaryFixedVariant: '#005047',
        secondary: '#A53C08',
        onSecondary: '#FFFFFF',
        secondaryContainer: '#FFDBCE',
        onSecondaryContainer: '#370E00',
        secondaryFixed: '#FFDBCE',
        onSecondaryFixed: '#370E00',
        secondaryFixedDim: '#FFB599',
        onSecondaryFixedVariant: '#802A00',
        tertiary: '#456179',
        onTertiary: '#FFFFFF',
        tertiaryContainer: '#CBE6FF',
        onTertiaryContainer: '#001E30',
        tertiaryFixed: '#CBE6FF',
        onTertiaryFixed: '#001E30',
        tertiaryFixedDim: '#ACCAE5',
        onTertiaryFixedVariant: '#2C4A60',
        error: '#BA1A1A',
        onError: '#FFFFFF',
        errorContainer: '#FFDAD6',
        onErrorContainer: '#410002',
        outline: '#6F7976',
        background: '#FAFDFB',
        onBackground: '#191C1B',
        surface: '#F7FAF8',
        onSurface: '#191C1B',
        surfaceVariant: '#DAE5E1',
        onSurfaceVariant: '#3F4946',
        inverseSurface: '#2D3130',
        inverseOnSurface: '#EFF1EF',
        inversePrimary: '#49DCC7',
        shadow: '#000000',
        surfaceTint: '#006B5F',
        outlineVariant: '#BEC9C5',
        scrim: '#000000',
        surfaceContainerHighest: '#E0E3E1',
        surfaceContainerHigh: '#E6E9E7',
        surfaceContainer: '#ECEEEC',
        surfaceContainerLow: '#F2F4F2',
        surfaceContainerLowest: '#FFFFFF',
        surfaceBright: '#F7FAF8',
        surfaceDim: '#D8DBD9',
      },
      dark: {
        primary: '#49DCC7',
        onPrimary: '#003731',
        primaryContainer: '#005047',
        onPrimaryContainer: '#6BF9E3',
        primaryFixed: '#6BF9E3',
        onPrimaryFixed: '#00201C',
        primaryFixedDim: '#49DCC7',
        onPrimaryFixedVariant: '#005047',
        secondary: '#FFB599',
        onSecondary: '#5A1B00',
        secondaryContainer: '#802A00',
        onSecondaryContainer: '#FFDBCE',
        secondaryFixed: '#FFDBCE',
        onSecondaryFixed: '#370E00',
        secondaryFixedDim: '#FFB599',
        onSecondaryFixedVariant: '#802A00',
        tertiary: '#ACCAE5',
        onTertiary: '#143349',
        tertiaryContainer: '#2C4A60',
        onTertiaryContainer: '#CBE6FF',
        tertiaryFixed: '#CBE6FF',
        onTertiaryFixed: '#001E30',
        tertiaryFixedDim: '#ACCAE5',
        onTertiaryFixedVariant: '#2C4A60',
        error: '#FFB4AB',
        onError: '#690005',
        errorContainer: '#93000A',
        onErrorContainer: '#FFDAD6',
        outline: '#899390',
        background: '#191C1B',
        onBackground: '#E0E3E1',
        surface: '#101413',
        onSurface: '#C4C7C5',
        surfaceVariant: '#3F4946',
        onSurfaceVariant: '#BEC9C5',
        inverseSurface: '#E0E3E1',
        inverseOnSurface: '#191C1B',
        inversePrimary: '#006B5F',
        shadow: '#000000',
        surfaceTint: '#49DCC7',
        outlineVariant: '#3F4946',
        scrim: '#000000',
        surfaceContainerHighest: '#323534',
        surfaceContainerHigh: '#272B2A',
        surfaceContainer: '#1D201F',
        surfaceContainerLow: '#191C1B',
        surfaceContainerLowest: '#0B0F0E',
        surfaceBright: '#363A39',
        surfaceDim: '#101413',
      },
      palettes: {
        primary: {
          '0': '#000000',
          '5': '#001411',
          '10': '#00201C',
          '20': '#003731',
          '25': '#00443C',
          '30': '#005047',
          '35': '#005D53',
          '40': '#006B5F',
          '50': '#008678',
          '60': '#00A391',
          '70': '#18C0AC',
          '80': '#49DCC7',
          '90': '#6BF9E3',
          '95': '#B5FFF0',
          '98': '#E5FFF8',
          '99': '#F2FFFB',
          '100': '#FFFFFF',
        },
        secondary: {
          '0': '#000000',
          '5': '#260700',
          '10': '#370E00',
          '20': '#5A1B00',
          '25': '#6D2300',
          '30': '#802A00',
          '35': '#933200',
          '40': '#A53C08',
          '50': '#C65422',
          '60': '#E76C39',
          '70': '#FF8C5E',
          '80': '#FFB599',
          '90': '#FFDBCE',
          '95': '#FFEDE7',
          '98': '#FFF8F6',
          '99': '#FFFBFF',
          '100': '#FFFFFF',
        },
        tertiary: {
          '0': '#000000',
          '5': '#001220',
          '10': '#001E30',
          '20': '#143349',
          '25': '#203E54',
          '30': '#2C4A60',
          '35': '#39556C',
          '40': '#456179',
          '50': '#5D7A93',
          '60': '#7794AD',
          '70': '#91AFC9',
          '80': '#ACCAE5',
          '90': '#CBE6FF',
          '95': '#E6F2FF',
          '98': '#F7F9FF',
          '99': '#FCFCFF',
          '100': '#FFFFFF',
        },
        error: {
          '0': '#000000',
          '5': '#2D0001',
          '10': '#410002',
          '20': '#690005',
          '25': '#7E0007',
          '30': '#93000A',
          '35': '#A80710',
          '40': '#BA1A1A',
          '50': '#DE3730',
          '60': '#FF5449',
          '70': '#FF897D',
          '80': '#FFB4AB',
          '90': '#FFDAD6',
          '95': '#FFEDEA',
          '98': '#FFF8F7',
          '99': '#FFFBFF',
          '100': '#FFFFFF',
        },
        neutral: {
          '0': '#000000',
          '5': '#0E1211',
          '10': '#191C1B',
          '20': '#2D3130',
          '25': '#383C3B',
          '30': '#444746',
          '35': '#505352',
          '40': '#5C5F5E',
          '50': '#747876',
          '60': '#8E9190',
          '70': '#A9ACAA',
          '80': '#C4C7C5',
          '90': '#E0E3E1',
          '95': '#EFF1EF',
          '98': '#F7FAF8',
          '99': '#FAFDFB',
          '100': '#FFFFFF',
        },
        neutralVariant: {
          '0': '#000000',
          '5': '#091311',
          '10': '#141D1B',
          '20': '#293230',
          '25': '#343D3B',
          '30': '#3F4946',
          '35': '#4B5452',
          '40': '#56605E',
          '50': '#6F7976',
          '60': '#899390',
          '70': '#A3ADAA',
          '80': '#BEC9C5',
          '90': '#DAE5E1',
          '95': '#E9F3EF',
          '98': '#F1FCF8',
          '99': '#F4FFFB',
          '100': '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
export default config;
