import { useState } from "react";
import LoginForm from "../component/LoginForm";
import loginImage from "../assets/images/login.svg.png";
import { useLocation } from "react-router-dom";
import SignupForm from "../component/SignupForm";
import { loginUser, register } from "../features/auth/authThunks";
import { useAppDispatch, useAppSelector } from "../store/hooks";

function LoginPage() {
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const dispatch = useAppDispatch();

  const { loading, error, user, token } = useAppSelector((state) => state.auth);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const handleLogin = (formValues: any) => {
    dispatch(loginUser(formValues));
  };

  const handleSignup = (formValues: any) => {
    dispatch(register(formValues));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Image section */}
      <div className="md:w-1/2 flex items-center justify-center p-8">
        <img src={loginImage} alt="Login" className="max-w-full h-auto" />
      </div>

      {/* Form section */}
      <div className="md:w-1/2 flex items-center">
        <div className="w-full p-8 transition-colors">
          {location.pathname === "/login" ? (
            <LoginForm onSubmit={handleLogin} />
          ) : (
            <SignupForm onSubmit={handleSignup} />
          )}
          {loading && <p className="text-blue-500">Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
