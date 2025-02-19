import  { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SearchContext } from '../../hooks/SearchContxt';

const Top_Navigation = () => {

  const {  setSearchQuery } = useContext(SearchContext) || {};
  const loaction = useLocation()
    

  return (
    <>
    {
        !loaction.pathname.startsWith('/user')  && (
            <div className="container mx-auto flex flex-col gap-2 px-8 my-4">
                <h1>Discover new Movies and TV Shows</h1>
                
                <div className='flex gap-[35px]'>
                    <Link 
                        onClick={()=>setSearchQuery?.('')}
                        to="/movie">
                        <button
                            className="px-5 py-2 font-medium text-white text-2xl  rounded-lg bg-cyan-600 hover:bg-cyan-700 "> 
                        🎬 Movies
                        </button>
                    </Link>
                    <Link
                        onClick={()=>setSearchQuery?.('')}
                        to="/tv">
                        <button
                            className="px-5 py-2 font-medium text-white text-2xl  rounded-lg bg-cyan-600 hover:bg-cyan-700"> 
                        📺  TV Shows
                        </button>
                    </Link>
                </div>
        </div>
        )
    }
  </>

  )
}

export default Top_Navigation