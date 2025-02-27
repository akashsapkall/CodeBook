import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrder } from "../../services";
export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function fetchData(){
     try{ const data=await getUserOrder();
      setOrders(data);}
      catch(error){
        toast.error(error.message);
      }
    }
    fetchData();
  }, []);
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 py-10 underline underline-offset-8">
          My Dashboard{" "}
        </p>
      </section>
      <section>
        {orders.length > 0 &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>
      <section>{orders.length === 0 && <DashboardEmpty />}</section>
    </main>
  );
};
