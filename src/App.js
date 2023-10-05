import "./App.css";

//components
import LeftSide from "./components/LeftSide/LeftSide";
import Middle from "./components/Middle/Middle";
import RightSide from "./components/RightSide/RightSide";

//data
import orders from "./data";

function App() {
  return (
    <div className="App">
      <div className="container">
        <LeftSide />
        <Middle orders={orders} />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
