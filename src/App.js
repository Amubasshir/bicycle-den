import
  {
    BrowserRouter as Router, Route, Switch
  } from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import Contact from "./Pages/Contact/Contact";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";


function App() {
  return (
    <div className="App">
      <AuthProvider>
         <Router>
        
         <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
