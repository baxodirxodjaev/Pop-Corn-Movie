

interface MainChildren{
  children: React.ReactNode 
}

const Main = ({children}: MainChildren) => {
  return (
    <section className="  container mx-auto  ">
        <div className="">
          {  children}
        </div>
</section>
  )
}

export default Main