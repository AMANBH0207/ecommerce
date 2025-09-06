import { useEffect, useState } from "react";
import LoginForm from "../component/LoginForm";
import loginImage from "../assets/images/login.svg.png";
import { useLocation } from "react-router-dom";
import SignupForm from "../component/SignupForm";

function LoginPage() {
  const location=useLocation()
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(()=>{console.log(location)},[location])

  const handleLogin = (formvalues:any) => {
    console.log("Login attempt:",  formvalues);
    // Add API call here
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
          {/* Optional Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 bg-blue-500 dark:bg-blue-400 text-white px-3 py-1 rounded"
          >
            {theme === "light" ? "Dark" : "Light"} Mode
          </button> */}
        {location.pathname==="/login"?<LoginForm onSubmit={handleLogin} />:<SignupForm onSubmit={handleLogin}/>}
          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
