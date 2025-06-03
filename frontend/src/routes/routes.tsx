import { RouteObject } from "react-router-dom";
import LandingPage from "../pages/home/LandingPage";
import SignupPage from "../pages/auth/signup/SignupPage";
import LoginPage from "../pages/auth/login/LoginPage";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Home from "../pages/dashboard/home/Home";
import Interviews from "../pages/dashboard/interviews/Interviews";
import Resume from "../pages/dashboard/resume/Resume";
import PrivateRoute from "../context/PrivateRoute";

const routes: RouteObject[] = [
  { path: '/', element: <LandingPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/login', element: <LoginPage /> },
  {
    path: 'dashboard',
    element: <PrivateRoute />,
    children: [
      {
        path: '',
        element: <DashboardLayout />,
        children: [
          { path: '', element: <Home /> },
          { path: 'interviews', element: <Interviews /> },
          { path: 'resume', element: <Resume /> },
        ]
      }
    ]
  }
]

export default routes