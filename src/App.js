
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import Home from './pages/Home';
import store from './store/store';
function App() {
  return (

    <Provider store={store}>
        <>
        <Nav />
        <Home />
      </>
    </Provider>
  );
}

export default App;
