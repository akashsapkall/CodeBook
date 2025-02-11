import { useEffect, useState } from "react"
import { toast } from "react-toastify";
export const useFetch=(suburl)=>{
    // const controller=new AbortController();
    const url=`${import.meta.env.VITE_HOST}/444/${suburl}`;
    const [ data, setData ]=useState([]);
    const [ loading, setLoading ]=useState(false);
    const [ error, setError ]=useState(null);
    useEffect(()=>{
        async function fetchApi(){
            try{
                setLoading(true);
                const res=await fetch(url);
                if(!res.ok){
                    throw new Error("Error Occured :"+res.status);
                }
                const json=await res.json();
                setData(json);
            }
            catch(err){
                if(err.name !== "AbortError"){
                setError(err.message || "Something Went Wrong!!");
                toast.error(err.message);
                }
            }
            finally{
                setLoading(false);
            }
        }
        fetchApi();
        // return ()=>{controller.abort();}
    },[url]);
    return { data, loading, error};
}