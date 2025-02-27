function getSession(){
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    const token = JSON.parse(sessionStorage.getItem("token"));
    return { token:token, cbid:cbid }
}
export async function getUser(){
      const { token, cbid }=getSession();
      const response = await fetch(`${import.meta.env.VITE_HOST}/600/users/${cbid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if(!response.ok) throw {message:response.statusText, status:response.status} //eslint-disable-line
      const data = await response.json();
    return data;
}

export async function getUserOrder(){
  const { token, cbid }=getSession();
      const response = await fetch(
        `${import.meta.env.VITE_HOST}/660/orders?user.id=${cbid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if(!response.ok) throw {message:response.statusText, status:response.status} //eslint-disable-line
      const data = await response.json();
    return data;
}
export async function createOrder(cartList, total, user){
    const orderDetail={
        cartlist:cartList,
        amt_payble:total,
        user:{
          name:user.name,
          email:user.email,
          id:user.id,
        }
      }
      const { token }=getSession();
    const response = await fetch(`${import.meta.env.VITE_HOST}/660/orders/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(orderDetail),
          });
    
          if(!response.ok) throw {message:response.statusText, status:response.status} //eslint-disable-line
          const data = await response.json();
    return data;
}