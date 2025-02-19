import {  useLocation, useNavigate } from "react-router-dom";
import { useSavedMovies } from "../../hooks/useSavedMovies";
import { useEffect,  useState } from "react";



interface RegistrProp {
  isLoggedIn: boolean;

  setIsLoggedIn: (loggedIn: boolean) => void;
}

const Registration = ({ setIsLoggedIn }: RegistrProp) => {
  const navigate = useNavigate();
  const location = useLocation()
  const [totalItems, setTotalItems] = useState(0)
  const {savedMovies, savedTVShows} = useSavedMovies()
  
  // const allItems = useMemo(()=> savedMovies.length + savedTVShows.length , 
  // [savedMovies.length , savedTVShows.length])
  

  useEffect(()=>{
    setTotalItems(savedMovies.length + savedTVShows.length)
  },[savedMovies.length , savedTVShows.length])
  
  
  
  const handleClick = () => {
    if (location.pathname === "/user") {
      navigate(location.state?.from || "/", { replace: true }); 
      setIsLoggedIn(false);
    } else {
      navigate("/user", { state: { from: location.pathname } }); 
      setIsLoggedIn(true);
    }
  };

  

  return (
    <div className="relative">
      {
        totalItems > 0 ?
        <span className="absolute right-[2%] top-[-8%] size-[20px] rounded-[50%] flex items-center justify-center bg-stone-700 text-orange-500 font-medium">
         {totalItems}
        </span>
         : null
      }
     
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-full transition"
      >
        {location.pathname.startsWith('/user') ? "Close" : "Open"}
      </button>
    </div>

  );
};

export default Registration;