import { useDebugValue, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "./components/useSearch";
export const ProductList = () => {
  const [filterBar, setFilterBar] = useState(false);
  
  let url=useSelector((state)=>state.filter.url);
  console.log(url);
  const [ searchparam ]=useSearchParams();
  const query=searchparam.get("q") || "";
  console.log(query);
  if(query){
    useSearch(query); 
  }
  console.log(url);
  // const url = "http://localhost:8000/products&in_sto=tru";
  const { data:productlist, loading, error } = useFetch(url);

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
      <section className="mb-5">
        <div className="w-[90vw] mx-auto py-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks [{productlist.length}]
          </span>
          <span>
            <button
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
              onClick={() => setFilterBar(!filterBar)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>
        {filterBar && (
          <FilterBar
            makeFilterBarClose={(y) => {
              setFilterBar(y);
            }}
          />
        )}
        <div className="flex flex-wrap justify-center lg:flex-row">
          {productlist &&
            productlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
    </main>
  );
};
