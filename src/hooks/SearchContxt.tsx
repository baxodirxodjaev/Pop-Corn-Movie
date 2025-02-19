import { createContext, ReactNode, useState, } from "react";


export interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}


export const SearchContext = createContext<SearchContextType | undefined>(undefined);


export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
