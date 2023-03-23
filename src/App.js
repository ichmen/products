import "./App.css";
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Products from "../src/components/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Products />
    </div>
  );
}

export default App;
