import { useNavigate } from "react-router-dom";
export const Search = () => {
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    const query=e.target.search.value;
    navigate(`/search?q=${query}`);
    e.target.reset();
  }
  return (
    <nav className="bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-none pb-2">
      <div className="w-[90vw] mx-auto">
        <span className="cursor-pointer text-xl  text-gray-700 dark:text-white absolute px-2 pt-1">
          <i className="bi bi-search"></i>
        </span>
        <form 
        onSubmit={(e)=>handleSubmit(e)}>
          <input
            type="text"
            name="search"
            id="search"
            required=""
            placeholder="search"
            autoComplete="off"
            className="w-full h-8 pl-8 focus:outline-none focus:ring-2 focus:ring-gray-200 border border-gray-700 dark:text-white dark:border-white dark:focus:ring-gray-700 rounded-lg me-1"
            // onChange={}
          />
        </form>
      </div>
    </nav>
  );
};
