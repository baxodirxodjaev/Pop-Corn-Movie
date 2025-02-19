import { useState } from "react"
import Star from "./Star"


interface StarRatigProp{
    vote_average : number | undefined
}

const StarRating = ({vote_average} : StarRatigProp) => {

    const [rating , setRating] = useState<number | undefined>(vote_average)
    const [tempRating , setTempRating] = useState<number>(0)

    const handleRating =( rating : number)=>{
        setRating(rating)
    }



  return (
    <div className="flex gap-1">
        {
            Array.from({length: 10}, (_, i)=> (
                <Star key={i} 
                    handleRating={()=>handleRating(i+1)} 
                    full={tempRating ? tempRating >= i+1 : (rating && rating >= i+1)}
                    onHoverIn ={()=>setTempRating(i+1)}
                    onHoverOut ={()=>setTempRating(0)}/>
            ))
        }
        <p>{tempRating || rating || ""}</p>
    </div>
  )
}

export default StarRating