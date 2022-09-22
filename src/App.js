import { Redirect, Route, Switch } from "react-router-dom";
import AllQoutes from "./pages/AllQoutes";
import NewQoute from "./pages/NewQoute";
import QouteDetail from "./pages/QouteDetail";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/qoutes" />
      </Route>
      <Route path="/qoutes" exact>
        <AllQoutes />
      </Route>
      <Route path="/qoutes/:qouteId">
        <QouteDetail />
      </Route>
      <Route path="/new-qoute">
        <NewQoute />
      </Route>
    </Switch>
  );
}

export default App;
