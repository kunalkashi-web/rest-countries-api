import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import CountryInfo from "./components/CountryInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/:name", element: <CountryInfo /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
