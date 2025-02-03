import { EmptyCart } from "./components/EmptyCart"
import { CartList } from "./components/CartList"
import { useSelector } from "react-redux";
export const CartPage=()=>{
    const cartList=useSelector((state)=>state.cart.cartList);
    return (
       <main>
        {cartList.length!==0?<CartList cartList={cartList}/>:< EmptyCart />}
       </main>
    )
}