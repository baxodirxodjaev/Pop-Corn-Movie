import { Person } from '../../types/PersonInterface'
import { Link } from 'react-router-dom'


interface PeopleCreditProp{
    selectedPerson : Person
}

const People_Credits = ({selectedPerson} : PeopleCreditProp) => {
  return (
    <div>
    <h2 className="text-3xl font-bold mb-4">{selectedPerson.name}</h2>
   {selectedPerson.profile_path && (
     <img
       src={`https://image.tmdb.org/t/p/w500${selectedPerson.profile_path}`}
       alt={selectedPerson.name}
       className="rounded mb-4"
     />
   )}
   <p className="mb-2"><strong>Known For Department:</strong> {selectedPerson.known_for_department}</p>
   <p className="mb-2"><strong>Popularity: <i className=" mx-2 bi bi-graph-up-arrow"></i>  </strong> {selectedPerson.popularity}</p>
   <h3 className="text-2xl font-bold mb-2">Known For:</h3>
   <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
     {selectedPerson.known_for.map((media) => (
       <Link to={ `/movie/${media.id}`}>
       <div key={media.id} className="bg-gray-800 rounded p-2">
         {media.poster_path && (
           <img
             src={`https://image.tmdb.org/t/p/w200${media.poster_path}`}
             alt={media.name || media.title || "Media Poster"}
             className="rounded mx-auto mb-2"
           />
         )}
         <p className="font-bold">{media.name || media.title}</p>
         <p className="text-sm">{media.media_type}</p>
       </div>
       </Link>

     ))}
   </div>
 </div>
  )
}

export default People_Credits