

interface MainChildren{
  children: React.ReactNode 
}

const Main = ({children}: MainChildren) => {
  return (
    <section className=" mt-[50px] container mx-auto  ">
        <div className="">
          {  children}
        </div>
</section>
  )
}

export default Main