import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "./Components/HomePages/Home/Home";
// import AddProducts from "./Components/Routes/AddProducts/AddProducts";
import MyCart from "./Components/Routes/MyCart/MyCart";
import CardContextProvider from "./Components/Routes/CardContext/CardContext";
import DetailsPages from "./Components/Routes/MyCart/DetailsPages";
import CategoryItems from "./Components/HomePages/Home/CategoryItems";
import Products from "./Components/Routes/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/myCart",
        element: <MyCart />,
      },
      {
        path: "/detailsPages/:id",
        element: <DetailsPages />,
      },
      {
        path: "/categoryItems",
        element: <CategoryItems />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="container mx-auto">
      <CardContextProvider>
        <RouterProvider router={router} />
      </CardContextProvider>
    </div>
  );
}

export default App;
