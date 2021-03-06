import
  {
    BrowserRouter as Router, Route, Switch
  } from "react-router-dom";
import './App.css';
import AuthProvider from "./Contexts/AuthProvider/AuthProvider";
import Checkout from "./Pages/Checkout/Checkout";
import Contact from "./Pages/Contact/Contact";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Review from "./Pages/Dashboard/Review/Review";
import Explore from "./Pages/Explore/Explore";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";







function App() {
  return (
    <div className="App">
      <AuthProvider>
         <Router>
        
         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
            </Route>
             <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
            <Route exact path="/login">
              <Navigation></Navigation>
              <Login />
              <Footer></Footer>
          </Route>
            <Route exact path="/register">
              <Navigation></Navigation>
              <Register />
               <Footer></Footer>
          </Route>
            <Route exact path="/explore">
              <Navigation></Navigation>
              <Explore />
              <Footer></Footer>
          </Route>
          
          <Route path="/addProducts">
            <AddProduct />
          </Route>
           
          <Route path="/review">
            <Review />
          </Route>
          
           <PrivateRoute exact path="/checkout/:id">
            <Navigation></Navigation>
            <Checkout></Checkout>
            <Footer></Footer>
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
