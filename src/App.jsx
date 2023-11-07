import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Navbar from "./component/Layouts/Navbar";
import Home from "./pages/Home";
import ConnectWallet from "./pages/Wallets";
import SubmitWallet from "./pages/submit";
import Confirmation from "./pages/confirm";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />

        <Route >
          <Route path="/wallets" element={<ConnectWallet />} />
          <Route path="/submit" element={<SubmitWallet />} />
          <Route path="/confirm" element={<Confirmation />} />
        </Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
