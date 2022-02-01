import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import Form from "./components/Form";
import Assignments from "./components/Assignments";
import { Provider } from "react-redux";
import { store } from "./store/store";
import EditAssignments from "./components/EditAssignments";
 
function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Nav />
        <Routes>
          <Route path="/add" element={<Form />} />
          <Route path="/" element={<Assignments />} />
          <Route path="/edit/:id" element={<EditAssignments />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
