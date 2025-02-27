

// export function getProduct(){

// }
// export function getFeatureProductList(){

// }
// export function getFeatureProductList(){
//             async function fetchApi(){
//                 try{
//                     setLoading(true);
//                     const res=await fetch(url);
//                     if(!res.ok){
//                         throw new Error("Error Occured :"+res.status);
//                     }
//                     const json=await res.json();
//                     setData(json);
//                 }
//                 catch(err){
//                     if(err.name !== "AbortError"){
//                     setError(err.message || "Something Went Wrong!!");
//                     }
//                 }
//                 finally{
//                     setLoading(false);
//                 }
//             }
//             fetchApi();
//             // return ()=>{controller.abort();}
//         },[url]);
//         return { data, loading, error};
//     }
// }