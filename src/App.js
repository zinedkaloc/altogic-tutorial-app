import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { AuthProvider } from "./context/Auth";
import { PrivateRoute } from "./components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        {/* Wrap routes in the AuthProvider 👇 */}
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
