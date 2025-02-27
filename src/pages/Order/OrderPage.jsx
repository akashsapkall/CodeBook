import { useLocation } from "react-router-dom";
import { OrderFail } from "./components/OrderFail"
import { OrderSuccess } from "./components/OrederSuccess"
import { useTitle } from "../../hooks/useTitle";

export const OrderPage=()=>{
    useTitle("Order");
    const { state }=useLocation();
    return (
        state.status?<OrderSuccess data={state.data} />:<OrderFail />
    )
}