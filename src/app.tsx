import type { Component } from "solid-js";
import { Link, useRoutes, useLocation } from "@solidjs/router";

import { routes } from "./routes";
import { FullLayout } from "./lib/layouts/FullLayout";

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <FullLayout>
      <Route />
    </FullLayout>
  );
};

export default App;
