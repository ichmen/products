// import "./App.scss";
// import "./styles/index.scss";
import Header from "../src/components/Header";
import Products from "../src/components/Products";
import NewProduct from "./components/NewProduct";
import { store } from "./actions/products.store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Products />
        <NewProduct />
      </Provider>
    </div>
  );
}

export default App;
