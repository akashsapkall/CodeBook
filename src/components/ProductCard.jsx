import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RatingCard } from "./RatingCard";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/CartSlice";
// import img1 from "../assets/images/books.jpg";
export const ProductCard = ({ product }) => {
  // const product={
  //   best_seller:"ak", poster:"ak", name:"ak", overview:"ak", rating:"ak", price:"ak",
  // }
  const { id, best_seller, poster, name, overview, rating, price } = product;
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart.cartList);
  // console.log(cartList);
  const [prodAdded, setProdAdded] = useState(true);
  useEffect(() => {
    const isAdded = cartList.find((prod) => prod.id === id);
    if (isAdded) {
      setProdAdded(true);
    } else {
      setProdAdded(false);
    }
  }, [cartList]);
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/product/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
            Best Seller
          </span>
        )}
        <img className="rounded-t-lg w-full h-64" src={poster} alt="" />
      </Link>
      {/* flex flex-col justify-between */}
      <div className="p-5">
        <Link to={`/product/${id}`}>
          <h5 className="mb-2 h-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 h-20 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
        <RatingCard rating={rating} />
        {/* {rating!=5 &&
                (()=>{
                    const filledArr=[];
                    for (let j = 0; j < 5-product.rating; j++) {
                        filledArr[j]=(<i key={j} className="text-lg bi bi-star text-yellow-500 mr-1"></i>)
                    }
                    return filledArr;
                })()
            } */}
        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span>
            <span>{price}</span>
          </span>
          {prodAdded ? (
            <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800"
            onClick={()=>dispatch(removeFromCart(product))}>
              Remove Item <i className="ml-1 bi bi-trash3"></i>
            </button>
          ) : (
            <button className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock?"":"cursor-not-allowed"}`}
            onClick={()=>dispatch(addToCart(product))}
            disabled={product.in_stock?"":"disabled"}
            >
              Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
            </button>
          )}
          {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
          </button> */}
          {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
        </p>
      </div>
    </div>
  );
};
