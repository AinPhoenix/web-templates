import { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "./routes";
import { store } from "./store/store";

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </Fragment>
  );
};

export default App;
