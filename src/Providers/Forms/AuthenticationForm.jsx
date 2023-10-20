import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

const AuthenticationForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname === "/auth") {
      navigate("/auth/login");
    }
  }, [location, navigate]);

  return (
    <div className="flex items-center justify-center py-10 backdrop-blur-3xl bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <div className="flex max-w-3xl shadow-md rounded-md">
        <div className="bg-[#faebe8] p-10 w-1/2 hidden sm:block">
          <div className="mb-10 px-4">
            <img src="/undraw_breakfast_psiw.svg" alt="food image" />
          </div>
          <div>
            <h2 className="font-semibold text-lg text-center">
              Where Flavor Meets Fun
            </h2>
            <p className="text-center text-xs mt-4 text-neutral-500">
              Where Every Dish Tells a Delicious Story, Elevating Your Dining
              Experience with a Dash of Innovation
            </p>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthenticationForm;
