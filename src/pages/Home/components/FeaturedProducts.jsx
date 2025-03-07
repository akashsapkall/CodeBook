import { useFetch } from "../../../hooks/useFetch";
import { ProductCard } from "../../../components/ProductCard";

const FeaturedProducts = () => {
  const { data: productlist, loading, error } = useFetch("featured_products");
  if(error){
    return(
      <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <p>{error}</p>
      </section>
    )
  }
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      {loading && <span>Loading ....</span>}
      {productlist && (
        <div className="flex flex-wrap justify-center lg:flex-row">
          {productlist &&
            productlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </section>
  );
};
export default FeaturedProducts;
