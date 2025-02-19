import  { useState } from 'react';
import { Person } from '../types/PersonInterface';
import usePeople from '../fetchAPI_Hooks/usePerson';
import Loading from '../components/loader/Loading';

import People_Slider from '../components/people_Details/People_Slider';
import People_Credits from '../components/people_Details/People_Credits';

const PeoplePage = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  
  const { people, loading, error } = usePeople();
  console.log(people);
  
  
  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
  };

  if (loading) return <Loading/> ;
  
  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <section className="w-full bg-gray-800 px-4 sm:px-8  text-white min-h-screen ">
     
     <h1 className='text-center text-xl sm:text-3xl text-gray-100 font-bold  my-5'>World popular Actors</h1>

      {/* People slider  */}
      <div className='w-full'>
        <People_Slider people={people} handlePersonClick={handlePersonClick} />
      </div>

      {/* Detail View */}
      <div className="flex-1 p-8 bg-gray-900 overflow-y-auto">
        {selectedPerson && (
          <People_Credits selectedPerson={selectedPerson} />
        )}
        {!selectedPerson && <p>Select a person to view details.</p>}
      </div>
    </section>
  );
};

export default PeoplePage;