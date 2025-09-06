import { useState } from "react";
import { Link } from "react-router-dom";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(username, password);
    };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-green-600">
        Welcome Back
      </h2>
      <span className="text-gray-500 text-sm">Login to continue</span>

      </div>
      

      {/* Username */}
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 dark:text-gray-300 text-sm mb-2"
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 dark:text-gray-300 text-sm mb-2"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-500 text-white cursor-pointer rounded py-2 hover:bg-green-600 dark:hover:bg-green-600 transition-colors"
      >
        <Link to="/home">Login</Link>
      </button>

      {/* Links */}
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        NEW USER?{" "}
        <span className="text-green-500 underline cursor-pointer"><Link to="/register">SIGN UP</Link></span>
      </div>
    </form>
  );
};

export default LoginForm;
