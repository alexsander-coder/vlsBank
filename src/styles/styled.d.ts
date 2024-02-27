import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    color: {
      primary: string;
      secondary: string;
      tertiary: string;

      //cor dos texto
      white: string;
      black: string;
      borders: string;

      success: string;
      info: string;
      warning: string;
    }
  }
}