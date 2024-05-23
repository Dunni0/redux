import { Provider } from "react-redux";
import store from "./redux/reduxStore";

import CakeShop from "./components/CakeShop";
import './App.css'

function App() {
  return (
    <Provider store={store}> 
    <div className="App">
      <CakeShop />
    </div>
    </Provider>
  );
}

export default App;
