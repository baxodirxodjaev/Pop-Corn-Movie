import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../hooks/SearchContxt";


const SearchComponent = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext) || {};
  const [inputValue, setInputValue] = useState(searchQuery || "");


  const navigate = useNavigate();
  const location = useLocation();

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim().length === 0) return; 

    setSearchQuery?.(inputValue);
    navigate(`/search/${encodeURIComponent(inputValue)}`);
  };

 
  const handleCancelSearch = () => {

    if (location.pathname === `/search/${encodeURIComponent(inputValue)}`) {
      navigate(location.state?.from || "/", { replace: true }); 
    } else {
      navigate("/user", { state: { from: location.pathname } }); 
    }

    setInputValue(""); 
    setSearchQuery?.("");
  };

  return location.pathname.startsWith("/user") ? null : (
    <div className="flex items-center rounded-md bg-gray-800">
      <input
        required
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Find movies and TV shows..."
        className="w-full max-w-md px-3 py-2 rounded-md text-white focus:outline-none"
      />
      
      {/* 🔍 Кнопка поиска */}
      <button 
        className="cursor-pointer px-3 text-2xl"
        onClick={handleSearch}
      >
        🔍
      </button>

      {/* ⛔ Кнопка отмены (показывается, если есть запрос) */}
      {searchQuery && (
        <button 
          className="cursor-pointer px-3 text-2xl"
          onClick={handleCancelSearch}
        >
          ⛔
        </button>
      )}
    </div>
  );
};

export default SearchComponent;
