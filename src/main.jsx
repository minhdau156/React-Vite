import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import ProductPage from "./pages/Book.jsx";
import UserPage from "./pages/User.jsx";
import "./styles/global.css";
import TodoApp from "./components/todo/TodoApp.jsx";
import BookPage from "./pages/Book.jsx";
import ErrorPage from "./pages/Error.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    ErrorBoundary: ErrorPage,

    children: [
      {
        path: "/users",
        Component: UserPage,
      },
      {
        path: "/books",
        Component: BookPage,
      },
      {
        index: true,
        Component: TodoApp,
      },
    ],
    // loader: loadRootData,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
