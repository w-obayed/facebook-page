import Auth from "../page/auth/Auth";
import Home from "../page/home/Home";

// create public router
const Public = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
];

// export
export default Public;
