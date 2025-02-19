

interface PaginationProp{
    children :  React.ReactNode
}

const Pagination = ({children} : PaginationProp) => {
  return (
    <>
    {children}
    </>
  )
}

export default Pagination