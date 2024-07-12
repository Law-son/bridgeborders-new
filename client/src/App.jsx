import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import Error404 from "./pages/error/Error404";

// Layout
import RouteLayout from "./layouts/RouteLayout";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);


function App() {
  return <RouterProvider router={routes} />;
}

export default App
