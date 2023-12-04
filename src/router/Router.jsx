import { createBrowserRouter } from "react-router-dom";
import Public from "./Public";
import Private from "./private";

// create router
const Router = createBrowserRouter([...Public, ...Private]);

// export router
export default Router;
