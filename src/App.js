import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const Layout = React.lazy(() => import("./Layout"));
const AddContact = React.lazy(() => import("./component/AddContact"));
const EditContact = React.lazy(() => import("./component/EditContact"));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route
            exact
            path="/"
            name="My Contact"
            render={(props) => <Layout {...props} />}
          />
          <Route
            exact
            path="/Add-Contact"
            name="Add Contact"
            render={(props) => <AddContact {...props} />}
          />
          <Route
            exact
            path="/Edit-Contact"
            name="Edit Contact"
            render={(props) => <EditContact {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
