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
import {
  AuthContext,
  AuthWrapper,
} from "./components/context/auth.context.jsx";

import  PrivateRoute  from "./pages/private.route.jsx";

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
        element: (
          <PrivateRoute>
            <BookPage />
          </PrivateRoute>
        ),
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
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </StrictMode>
);
