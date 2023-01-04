import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Layout/Mainpage";
import Home from "../pages/Home";
import Quize from "../pages/Quize";
import Profile from "../pages/Profile";
import PrivetRouting from "./PrivetRouting";
import Error from "../pages/Error";
import AdminPanel from "../pages/AdminPanel";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    errorElement : <Error></Error>,
    children: [
      {
        path: "/", element: <Home />,
      },
      {
        path: "/quize",element: <PrivetRouting><Quize/></PrivetRouting>
      },
      {
        path: "/profile",element: <PrivetRouting><Profile/></PrivetRouting>
      },
      {
        path: "/admin",element: <PrivetRouting> <AdminPanel/> </PrivetRouting>
      },
    ],
  },
]);

export default router;
