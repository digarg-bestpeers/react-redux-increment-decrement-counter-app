import logo from './logo.svg';
import './App.css';
import BookContainer from "./components/BookContainer"
import { Provider } from "react-redux"
import Store from "./redux/Store"
import MobileContainer from "./components/MobileContainer"


function App() {
  return (
      <Provider store={Store}>
        <div className="App">
          <BookContainer />
          <MobileContainer />
        </div>
      </Provider>
  );
}

export default App;
