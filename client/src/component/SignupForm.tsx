import React, { useState } from "react";
import { Link } from "react-router-dom";

interface formValues {
  name: string;
  email: string;
  password: string;
}

interface SignupFormProps {
  onSubmit: (formValues: formValues) => void;
}

function SignupForm({ onSubmit }: SignupFormProps) {
  const [formValues, setFormValues] = useState<formValues>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
      
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-green-600">Register</h2>
        <span className="text-gray-500 text-sm">Join us</span>
      </div>

      {/* Username */}
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 dark:text-gray-300 text-sm mb-2"
        >
          Name
        </label>
        <input
          id="username"
          type="text"
          value={formValues.name}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="Enter your username"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 dark:text-gray-300 text-sm mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Enter your email"
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
          value={formValues.password}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Enter your password"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>

      {/* Password */}
      {/* <div className="mb-4">
        <label
          htmlFor="confirmpassword"
          className="block text-gray-700 dark:text-gray-300 text-sm mb-2"
        >
          Email
        </label>
        <input
          id="confirmpassword"
          type="password"
          value={formValues.confirmPassword}
          onChange={(e) => setFormValues((prev)=>({...prev,confirmPassword:e.target.value}))}
          placeholder="Enter your password"
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div> */}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-500 text-white cursor-pointer rounded py-2 hover:bg-green-600 dark:hover:bg-green-600 transition-colors"
      >
        Register
      </button>

      {/* Links */}
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        ALREADY USER?{" "}
        <span className="text-green-500 underline cursor-pointer">
          <Link to="/login">LOGIN</Link>
        </span>
      </div>
    </form>
  );
}

export default SignupForm;
