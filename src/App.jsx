import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "./Components/HomePages/Home/Home";
import AddProducts from "./Components/Routes/AddProducts/AddProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProducts",
        element: <AddProducts />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
