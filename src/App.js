import { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Loading } from "./component";
import "./App.css";
import "./styles.css";
const Home = lazy(() => import("./pages/Home/home"));

function App() {
  return (
    <div className="containers-body">
      <BrowserRouter>
        <Suspense fallback={Loading}>
          <Switch>
            <Route exact path="/home" name="home" component={Home} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
