import SliderComponent from '../slider/SliderComponent'
import { Person } from '../../types/PersonInterface'

interface PeopleProp{
    people : Person[];
    handlePersonClick: (person: Person) => void;
}

const People_Slider = ({people , handlePersonClick} : PeopleProp) => {
  return (
    <div>
         <SliderComponent
          classname=''
          settings={{
            dots: false,
            arrows: false
          }}
            items={people}
            renderItem={(person)=>(
              <div 
                key={person.id}
                onClick={() => handlePersonClick(person)}
                className='flex-none hover:scale-105 transition-transform duration-300   w-[150px] md:w-[310px] lg:w-[410px]'>
                <div className='relative hover:text-white'>
                  <img 
                      className='w-full   '
                      src={`https://image.tmdb.org/t/p/w300${person.profile_path}`} 
                      alt={person.name} />
                  <span className='bg-gray-700 w-full h-full absolute  top-0 opacity-40 hover:opacity-20'></span>
                  <p className='absolute z-10 bottom-3 left-2 text-2xl text-gray-100  font-medium'>{person.name}</p>
                </div>
              </div>
            )}
        />

    </div>
  )
}

export default People_Slider