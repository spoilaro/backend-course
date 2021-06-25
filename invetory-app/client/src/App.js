//import "./App.scss";
import { Home, SignUp, DashBoard, LogIn } from "./Screens";
import "firebase/auth";
import { Container } from "react-bootstrap";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
              <Route exact path="/" component={Home} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
