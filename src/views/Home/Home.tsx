import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <>
      <h1>Home</h1> <Link to="/app">App</Link>{" "}
    </>
  );
};
