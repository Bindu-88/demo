import "./App.css";
import Welcome from "./Components/welcome/Welcome";
import Clock from "./Components/clock/Clock";
import Contact from "./Components/contact/Contact";
function App() {
  return (
    <div className="App">
      <Welcome name="Bindu" />
      <Clock />
      <Contact />
    </div>
  );
}

export default App;
