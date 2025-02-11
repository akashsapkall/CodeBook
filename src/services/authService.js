export async function login(authDetails){
    const response = await fetch(`${import.meta.env.VITE_HOST}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(authDetails),
        });
        if(!response.ok) throw {message:response.statusText, status:response.status} //eslint-disable-line
        const data = await response.json();
        if(data.accessToken){
          sessionStorage.setItem("token",JSON.stringify(data.accessToken));
          sessionStorage.setItem("cbid",JSON.stringify(data.user.id));
        }
    return data;
}

export async function register(authDetails){
    const response = await fetch(`${import.meta.env.VITE_HOST}/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(authDetails)
        });
        if(!response.ok) throw {message:response.statusText, status:response.status} //eslint-disable-line
        const data = await response.json();
        if(data.accessToken){
          sessionStorage.setItem("token",JSON.stringify(data.accessToken));
          sessionStorage.setItem("cbid",JSON.stringify(data.user.id));
        }
    return data;
}
export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}