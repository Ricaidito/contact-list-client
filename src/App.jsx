import "./styles/App.css";
import Agenda from "./components/Agenda";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container app">
      <Agenda />
    </div>
  );
};

export default App;
