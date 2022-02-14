import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider/AuithProvider';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './PrivateRouter/PrivateRoute';
import Dashboard from './Pages/Dashboard/DashboardHome/Dashboard';
import Explore from './Pages/Explore/Explore';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/products/:id">
              <Purchase />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
