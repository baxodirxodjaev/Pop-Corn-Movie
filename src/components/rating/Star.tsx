
interface StarProp{
    handleRating : () => void,
    full : boolean | number | undefined,
    onHoverIn: () => void,
    onHoverOut: () => void
}

const Star = ({handleRating, full, onHoverIn, onHoverOut} : StarProp) => {
  return (
    <span 
    onMouseEnter={onHoverIn}
    onMouseLeave={onHoverOut}
    onClick={handleRating} 
   >
        {
            full ? 
            <i className="bi bi-star-fill text-yellow-500 "></i>
            : <i className="bi bi-star text-yellow-500 "></i>
        }
    </span>
  )
}

export default Star