import { EmptyCart } from "./components/EmptyCart"
import { CartList } from "./components/CartList"
import { useSelector } from "react-redux";
import { useTitle } from "../../hooks/useTitle";
export const CartPage=()=>{
    const cartList=useSelector((state)=>state.cart.cartList);
    useTitle(`Cart(${cartList.length})`);
    return (
       <main>
        {cartList.length!==0?<CartList cartList={cartList}/>:< EmptyCart />}
       </main>
    )
}