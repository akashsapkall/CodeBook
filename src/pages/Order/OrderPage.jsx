import { useLocation } from "react-router-dom";
import { OrderFail } from "./components/OrderFail"
import { OrderSuccess } from "./components/OrederSuccess"

export const OrderPage=()=>{
    const { state }=useLocation();
    // const status=false;
    return (
        state.status?<OrderSuccess data={state.data} />:<OrderFail />
    )
}