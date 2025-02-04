import { Link } from "react-router-dom";
export const EmptyCart = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto py-1 dark:text-slate-100 ">
      <div className="my-10 border dark:border-slate-700 rounded pb-8">
        <div className="py-10">
          <p className="bi bi-cart text-green-600 text-7xl mb-5"></p>
          <p>Oops! Your cart looks empty!</p>
          <p>Add eBooks to your cart from our store collection.</p>
        </div>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
        >
          Continue Shopping <i className="ml-2 bi bi-cart"></i>
        </Link>
      </div>
    </section>
  );
};
