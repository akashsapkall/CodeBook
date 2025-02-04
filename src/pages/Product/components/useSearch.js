import { useDispatch } from "react-redux";
import { updateUrl } from "../../../store/FilterSlice";

export const useSearch=(query)=>{
    const dispatch=useDispatch();
    dispatch(updateUrl(`http://localhost:8000/products?name_like=${query}`));
    return;
}