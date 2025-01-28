import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import logo from "../assets/images/4.png";
export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("codebook_darkmode")) || false
  );
  const [searchPanel, setSearchPanel] = useState(false);
  useEffect(() => {
    localStorage.setItem("codebook_darkmode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <nav
        className={
          searchPanel
            ? "bg-white dark:bg-gray-900 border-none"
            : "bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-none"
        }
      >
        <div className="w-[90vw] flex flex-wrap justify-between items-center mx-auto py-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold text-gray-700 whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span
              className="cursor-pointer text-xl text-gray-700 dark:text-white "
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <i className="bi bi-brightness-high-fill "></i>
              ) : (
                <i className="bi bi-moon-stars-fill"></i>
              )}
            </span>
            <span
              className="cursor-pointer text-xl  text-gray-700 dark:text-white"
              onClick={() => setSearchPanel(!searchPanel)}
            >
              <i className="bi bi-search"></i>
            </span>
            <Link to="/">
              <span className="cursor-pointer text-xl  text-gray-700 dark:text-white">
                <span className="text-sm rounded-lg bg-green-600 px-1 absolute ml-2">
                  5
                </span>
                <i className="bi bi-cart"></i>
              </span>
            </Link>
            <span className="cursor-pointer text-xl  text-gray-700 dark:text-white">
              <i className="bi bi-person-circle"></i>
            </span>
          </div>
        </div>
      </nav>
      {searchPanel && <Search />}
    </header>
  );
};
