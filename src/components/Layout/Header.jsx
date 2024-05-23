import HeaderCartButton from "./HeaderCartButton"

function Header() {
  return (
    <header className="h-16  text-white shadow-lg z-10 bg-red-600 flex flex-row justify-between px-20  items-center">
      <h1 className="text-3xl font-bold">ReactMeals</h1>
       <HeaderCartButton/>
    </header>
  )
}

export default Header
