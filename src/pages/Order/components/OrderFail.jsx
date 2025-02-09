import { Link } from "react-router-dom"
export const OrderFail = () => {
    return (
      <section className="min-h-[90vh] text-xl text-center max-w-4xl mx-auto py-5 dark:text-slate-100">
        <div className="md:border dark:border-slate-700 rounded py-8">
          <div className="my-5">
              <p className="bi bi-exclamation-circle text-red-500 text-7xl mb-5"></p>
              <p>Payment failed, please try again!</p>     
          </div>
          <div className="my-5">
              <p>Your order is not confirmed.</p>
              <p>Connect <span className="">codebook@example.com</span> for support.</p>
          </div>
          <Link to="/cart" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Check Cart Again<i className="ml-2 bi bi-cart"></i></Link>
          </div>
      </section>
    )
  }