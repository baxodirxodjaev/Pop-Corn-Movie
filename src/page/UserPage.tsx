
import { useSavedMovies } from "../hooks/useSavedMovies";
import User_Saved_Items from "../components/user-saved-items/User_Saved_Items";

const UserPage = () => {

  const { savedMovies,  removeMovie, savedTVShows  } = useSavedMovies();

  console.log(savedMovies);
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Favorite 🎬Movies and 📺TV shows 
        </h1>

        <User_Saved_Items savedItem = {savedMovies} removeMovie = {removeMovie} />
        <User_Saved_Items savedItem = {savedTVShows} removeMovie = {removeMovie}  />
    
      </div>
    </div>
  );
};

export default UserPage;
