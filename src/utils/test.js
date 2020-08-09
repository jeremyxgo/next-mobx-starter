/* eslint-disable import/no-extraneous-dependencies */
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { createTheme } from '@utils/theme';

const wrapper = ({ children }) => {
  const theme = createTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (component, options) =>
  render(component, { wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
