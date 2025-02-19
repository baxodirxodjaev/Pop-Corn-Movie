


interface ChildrenProp{
  children:  React.ReactNode
}

const NavBar = ({children} : ChildrenProp ) => {
  return (
    <header className="bg-gradient-to-r sticky top-0 z-50 from-indigo-900 via-purple-900 to-indigo-800 text-white py-4 shadow-md">
    <div className="container mx-auto flex items-center justify-between px-4">
      {/* LOGO */}
      {/* SEARCH BAR */}
      {/* LOGIN / LOGOUT */}
      {children}
    
    </div>
  </header>
  )
}

export default NavBar