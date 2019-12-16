import React, { FC } from "react";
import { Provider } from "react-redux";

import { Grid } from "components/Grid/Grid";
import { TopBar } from "components/TopBar/TopBar";
import { SoundbankContext } from "containers/SoundbankContext";
import store from "store/store";

const App: FC = () => (
  <Provider store={store}>
    <SoundbankContext>
      <TopBar />
      <Grid />
    </SoundbankContext>
  </Provider>
);

export default App;
