import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import theme from '../styles/theme';
import NavBar from './Home/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default Layout;
