import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import FrontLayout from "./layouts/FrontLayout";
import AuthPage from "./pages/AuthPage";
import DHomePage from "./pages/dashboard/DHome";
import TodosPage from "./pages/dashboard/TodosPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const ErrorLayout = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        <AppRoute exact path="/" component={HomePage} layout={FrontLayout} />
        <AppRoute
          exact
          path="/auth"
          component={AuthPage}
          layout={FrontLayout}
        />

        <AppRoute
          exact
          path="/dashboard"
          component={DHomePage}
          layout={DashboardLayout}
        />

        <AppRoute
          exact
          path="/dashboard/todos"
          component={TodosPage}
          layout={DashboardLayout}
        />

        <AppRoute component={ErrorPage} layout={ErrorLayout} />
      </Switch>
    </Router>
  );
};

export default Routes;
