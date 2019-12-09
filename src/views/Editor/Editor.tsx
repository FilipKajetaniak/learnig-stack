import React, { FC } from "react";
import { Provider } from "react-redux";

import { TopBar } from "components/TopBar/TopBar";
import { Grid } from "components/Grid/Grid";
import store from "store/store";

export const Editor: FC = () => {
  return (
    <Provider store={store}>
      <TopBar />
      <Grid />
    </Provider>
  );
};
