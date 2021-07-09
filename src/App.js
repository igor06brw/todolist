import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import DisplayTaskScreen from './screens/DisplayTaskScreen';

function App() {

  return (
    <div className="App">
      <Header />
      <DisplayTaskScreen />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
