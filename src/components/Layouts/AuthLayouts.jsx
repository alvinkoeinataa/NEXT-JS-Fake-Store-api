/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import Link from "next/link";
import { DarkMode } from "@/context/DarkMode";
const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className={`font-medium text-slate-600 mb-8 ${isDarkMode && "text-slate-50"}`}>Welcome, please enter your detail</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  const { isDarkMode } = useContext(DarkMode);

  if (type === "login") {
    return (
      <p className={`text-sm mt-5 text-center ${isDarkMode && "text-white"}`}>
        Don't have an account?{" "}
        <Link href="/auth/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className={`text-sm mt-5 text-center ${isDarkMode && "text-white"}`}>
        Already have an account?{" "}
        <Link href="/auth/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayout;
