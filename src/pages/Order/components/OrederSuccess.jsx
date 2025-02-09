import { Link } from "react-router-dom"
export const OrderSuccess = ({data}) => {
    return (
      <section className="h-[80vh] text-xl text-center max-w-4xl mx-auto py-5 dark:text-slate-100 ">
         <div className="md:border dark:border-slate-700 rounded py-8">
         <div className="my-5">
              <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
              <p>Thank you {data.user.name} for order!</p>
              <p>Your Order ID: {data.id}</p>          
          </div>
          <div className="my-5">
              <p>Your order is confirmed.</p>
              <p>Please check your mail {data.user.email} for the eBook.</p>
              <p className="my-5">Payment ID: xyz_123456789</p>
          </div>
          <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
         </div>
      </section>
    )
  }