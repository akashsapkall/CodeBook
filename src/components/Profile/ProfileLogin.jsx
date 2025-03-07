import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser, logout } from "../../services";
import { clearCart } from "../../store/CartSlice";
import { useEffect, useState} from "react";
import { toast } from "react-toastify";

export const ProfileLogin = ({ setProfile }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchUser();
  }, []);
  const handleLogOut = () => {
    logout();
    dispatch(clearCart());
    Navigate("/");
    setProfile(false);
  };
  return (
    <div
      id="dropdownAvatar"
      className="select-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{user.email}</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            onClick={() => setProfile(false)}
            to="/products"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setProfile(false)}
            to="/dashboard"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-1" onClick={handleLogOut}>
        <span className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          Log out
        </span>
      </div>
    </div>
  );
};
