// import { response } from "express";
import { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../store/CartSlice"
export const Checkout = ({ setCheckout, total }) => {
  const [user, setUser] = useState({});
  const Navigate=useNavigate();
  const dispatch=useDispatch();
  const cartList=useSelector((state)=>state.cart.cartList);
  // console.log(cartList);
  useEffect(() => {
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    const token = JSON.parse(sessionStorage.getItem("token"));
    async function fetchData() {
      const response = await fetch(`http://localhost:8000/600/users/${cbid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUser(data);
    }
    fetchData();
  }, []);
const orderDetail={
  cartlist:cartList,
  amt_payble:total,
  user:{
    name:user.name,
    email:user.email,
    id:user.id,
  }
}
function handleSubmit(event) {
  event.preventDefault(); // Fixed typo

  const token = JSON.parse(sessionStorage.getItem("token")); // Retrieve token inside function

  async function fetchOrder() {
    try {
      const response = await fetch("http://localhost:8000/660/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderDetail), // Moved body outside headers
      });

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      const data = await response.json();
      console.log("Order placed successfully:", data);
      
      dispatch(clearCart()); // Clear cart after successful order
      Navigate("/order-summary",{state:{data:data, status :true}}); // Redirect user
    } catch (error) {
      Navigate("/order-summary",{state:{status :false}});
    }
  }

  fetchOrder();
}

  return (
    <section>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <div
        id="authentication-modal"
        tabIndex="-1"
        className="mt-2 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto overflow-y-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => setCheckout(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                <i className="bi bi-credit-card mr-2"></i>CARD PAYMENT
              </h3>
              <form className="space-y-6"
              onSubmit={(event)=>handleSubmit(event)}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value={user.name || ""}
                    disabled
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value={user.email || ""}
                    disabled
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="card"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Card Number:
                  </label>
                  <input
                    type="number"
                    name="card"
                    id="card"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value="4215625462597845"
                    disabled
                    required=""
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Expiry Date:
                  </label>
                  <input
                    type="number"
                    name="month"
                    id="month"
                    className="w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value="03"
                    disabled
                    required=""
                  />
                  <input
                    type="number"
                    name="year"
                    id="year"
                    className="w-20 ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value="27"
                    disabled
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Security Code:
                  </label>
                  <input
                    type="number"
                    name="code"
                    id="code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white"
                    value="523"
                    disabled
                    required=""
                  />
                </div>
                <p className="mb-4 text-2xl font-semibold text-lime-500 text-center">
                  ${total}
                </p>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  <i className="mr-2 bi bi-lock-fill"></i>PAY NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
