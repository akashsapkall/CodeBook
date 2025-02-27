import { Link } from 'react-router-dom';
import pageNotFound from "../assets/404error.png";
import { useTitle } from '../hooks/useTitle';
export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <main>
      <div className="py-36 md:py-24">
        <div className="w-48 mx-auto">
          <img src={pageNotFound} alt="page not found img" />
        </div>
        <div className="flex justify-center">
          <p className="px-2 text-5xl text-center text-gray-700 font-semibold dark:text-white">
            oops! Page Not Found
          </p>
        </div>
        <div className='flex justify-center my-7 text-2xl text-gray-700 dark:text-white'>
          <p>Back To <Link to='/' className='hover:underline hover:underline-offset-2 font-semibold '><span>Home</span></Link></p>
        </div>
      </div>
    </main>
  );
};
