import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import DisplayTaskScreen from './screens/DisplayTaskScreen';
import CreateTaskScreen from './screens/CreateTaskScreen';

function App() {

  return (
    <Router>
      <Header />
      <div className="App">
        <Route path="/" exact component={DisplayTaskScreen} />
        <Route path="/createtask" component={CreateTaskScreen} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
