import
  {
    BrowserRouter as Router, Route, Switch
  } from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import AddProducts from "./Pages/AddProducts/AddProducts";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Review from "./Pages/Dashboard/Review/Review";
import Explore from "./Pages/Explore/Explore";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
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
          <Route path="/explore">
            <Explore />
          </Route>
          
          <Route path="/addProducts">
            <AddProducts />
          </Route>
           
          <Route path="/review">
            <Review />
          </Route>
           <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
         
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
