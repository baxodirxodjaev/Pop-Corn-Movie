import { useContext } from "react";
import { Link } from "react-router-dom"
import { SearchContext } from "../../hooks/SearchContxt";

const NavLogo = ({setIsLoggedIn} : {setIsLoggedIn: (value: boolean) => void}) => {

    const {  setSearchQuery } = useContext(SearchContext) || {};

    const handleBackTo= ()=>{
      setIsLoggedIn(false)
      setSearchQuery?.('')
    }

    
  
  return (
    <Link 
      onClick={handleBackTo}
      to="/"  
      className="text-2xl font-bold tracking-wide flex items-center hover:text-gray-300 transition">
    🎬 <span className="text-indigo-400 hidden sm:block">PopCorn</span>
  </Link>
  )
}

export default NavLogo