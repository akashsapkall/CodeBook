import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import { useTitle } from "../hooks/useTitle";
import { RatingCard } from "../components/RatingCard";
import { addToCart, removeFromCart } from "../store/CartSlice";


export const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const url = `products/${id}`;
  const { data: product, loading, error } = useFetch(url);
  useTitle(product.name);
  const {
    name,
    overview,
    long_description,
    price,
    poster,
    rating,
    in_stock,
    size,
    best_seller,
  } = product;
  console.log(name);
  const cartList = useSelector((state) => state.cart.cartList);
  console.log(cartList);
  const [prodAdded, setProdAdded] = useState(false);
  useEffect(() => {
    const isAdded = cartList.find((prod) => prod.id == id);
    if (isAdded) {
      setProdAdded(true);
    } else {
      setProdAdded(false);
    }
  }, [cartList]);
  if (loading) {
    return (
      <main>
        <section className="mb-5">
          <div className="w-[90vw] p-2 mx-auto">
            <p>Loading...</p>
          </div>
        </section>
      </main>
    );
  }
  if (error) {
    return (
      <main>
        <section className="mb-5">
          <div className="w-[90vw] p-2 mx-auto">
            <p>{error}</p>
          </div>
        </section>
      </main>
    );
  }
  return (
    <main>
      {product && <section>
        <h1 className="pt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {name}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={poster} alt="" />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{price}</span>
            </p>
            <div className="my-3">
              <RatingCard rating={rating} />
            </div>
            <p className="my-4 select-none">
              {best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              {in_stock ? (
                <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  INSTOCK
                </span>
              ) : (
                <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {size} MB
              </span>
            </p>
            <p className="my-3">
              {prodAdded ? (
                <button
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}
                  disabled={product.in_stock ? "" : "disabled"}
                  onClick={()=>dispatch(removeFromCart(product))}
                >
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button>
              ) : (
                <button
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock?"":"cursor-not-allowed"}`}
                  disabled={product.in_stock?"":"disabled"}
                  onClick={()=>dispatch(addToCart(product))}
                >
                  Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              )}
            </p>
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {long_description}
            </p>
          </div>
        </div>
      </section>}
    </main>
  );
};
