import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DisplayTaskScreen from './screens/DisplayTaskScreen';
import CreateTaskScreen from './screens/CreateTaskScreen';

function App() {

  return (
    <Router>
      <Header />
      <Main>
        <Route path="/" exact component={DisplayTaskScreen} />
        <Route path="/createtask" component={CreateTaskScreen} />
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
