import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/HomePages/Home/Home";
import ErrorPage from "./ErrorPage";
import Root from "./Root";
// import AddProducts from "./Components/Routes/AddProducts/AddProducts";
import CategoryItems from "./Components/HomePages/Home/CategoryItems";
import About from "./Components/Routes/About/About";
import CardContextProvider from "./Components/Routes/CardContext/CardContext";
import Menu from "./Components/Routes/Menu/Menu";
import DetailsPages from "./Components/Routes/MyCart/DetailsPages";
import MyCart from "./Components/Routes/MyCart/MyCart";
import Products from "./Components/Routes/Products/Products";
import AuthenticationForm from "./Providers/Forms/AuthenticationForm";
import LoginForm from "./Providers/Forms/LoginForm";
import RegistrationForm from "./Providers/Forms/RegistrationForm";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
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
      {
        path: "/auth",
        element: <AuthenticationForm />,
        children: [
          {
            path: "login",
            element: <LoginForm />,
          },
          {
            path: "register",
            element: <RegistrationForm />,
          },
        ],
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
