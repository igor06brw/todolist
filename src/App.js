import styled from 'styled-components'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
`

function App() {

  return (
    <AppWrapper className="App">
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
}

export default App;
