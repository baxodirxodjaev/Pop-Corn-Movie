import "./App.css";
import Main from "./components/main/Main";
import MovieList from "./components/main/movie-list/MovieList";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Registration from "./components/navBar/Registration";
import { useState } from "react";
import NavLogo from "./components/navBar/NavLogo";
import CollectionPage from "./page/CollectionPage";
import ActorPage from "./page/ActorPage";
import Hero_Slider from "./components/heroSlider/Hero_Slider";
import SearchComponent from "./components/navBar/SearchComponent";
import SearchResults from "./page/SearchResults";
import TvShowsList from "./components/main/tv-shows-list/TvShowsList";
import TVShowDetailsPage from "./page/TVShowDetailsPage";
import MovieDetailsPage from "./page/MovieDetailsPage";
import Top_Navigation from "./components/top-navigation/Top_Navigation";
import UserPage from "./page/UserPage";
import { SearchProvider } from "./hooks/SearchContxt";
import PeoplePage from "./page/PeoplePage";


function App() {
  
  // const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  


  
  
  
  



  return (
    <>
    <SearchProvider>

        <Router>
          <NavBar>
            <NavLogo setIsLoggedIn = {setIsLoggedIn}/>
            <SearchComponent/>
            <Registration  isLoggedIn={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
          </NavBar>

          <Routes>
            <Route path="/" element={<> <Hero_Slider /> <PeoplePage /> </>} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/search/:searchQuery" element={<SearchResults />} />
          </Routes>

           <Top_Navigation /> 

          <Main>
            <Routes>
              <Route path='/movie' element={<MovieList />  } />
              <Route path='/tv' element={<TvShowsList />} />
              <Route path="/tv/:id" element={<TVShowDetailsPage />} />
              <Route path="/movie/:id" element={<MovieDetailsPage />} />
              <Route path="/collection/:collectionId" element={<CollectionPage />} />
              <Route path="/actor/:id" element={<ActorPage />} />
            </Routes>
          </Main>


          <Footer />
        </Router>

    </SearchProvider>

    </>
  );
}

export default App;
