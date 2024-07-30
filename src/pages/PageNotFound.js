import { useEffect } from "react"
import { Button } from "../Component/Button"
import { Link } from "react-router-dom"




export const PageNotFound = () => {

useEffect(() =>{
document.title =`Page Not Found / cinemate`;

},)


  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-5 dark:text-white">404, Oops!</p>
          <div className="max-w-xs">
           <img className="rounded" src="https://i.pinimg.com/originals/ec/c0/15/ecc015d4e89f77b435df3cd81928ad48.gif" alt="404 Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
          <Button>Back to cinematic</Button>  
          </Link>
                
        </div>
      </section>
    </main>
  )
}
