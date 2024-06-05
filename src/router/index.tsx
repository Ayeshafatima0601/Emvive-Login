import {
  Navigate,
  ActionFunction,
  LoaderFunction,
  json,
  LoaderFunctionArgs,
  createBrowserRouter,
  defer,
} from "react-router-dom";
import Dashboard from "../page/Dashboard";
import Login from "../page/Login";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import Prospect from "@/page/forms/prospect";
const authMiddleware: ActionFunction = async () => {
  const isAuthenticated = !!localStorage.getItem("authToken");
  if (!isAuthenticated) {
    return json({ message: "Unauthorized" }, { status: 401 });
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    action: authMiddleware,
    errorElement: <div>Oops! Something went wrong.</div>, // Error handling
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/dashboard" />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
            errorElement: <div>Error loading dashboard data.</div>,
          },
          {
            path: "/prospect",
            element: <Prospect />,
            errorElement: <div>Error loading prospect page.</div>,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [{ index: true, element: <Login /> }],
  },
]);

export default router;
