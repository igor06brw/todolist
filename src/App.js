import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styled, { ThemeProvider } from 'styled-components';
import { example } from './theme/themes';

const AppWrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
`

function App() {

  return (
    <ThemeProvider theme={example}>
      <AppWrapper className="App">
        <Header />
        <Main />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
