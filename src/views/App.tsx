import React, { FC } from "react";
import { Provider } from "react-redux";

import { Grid } from "components/Grid/Grid";
import { TopBar } from "components/TopBar/TopBar";
import store from "store/store";

const App: FC = () => (
  <Provider store={store}>
    <TopBar />
    <Grid />
  </Provider>
);

export default App;
