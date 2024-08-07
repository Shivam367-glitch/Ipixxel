import { useRouteError } from "react-router-dom"

const NotFound = () => { 

    const error=useRouteError(); 
    console.log(error);
    

  return (
    <div>
      <p>{error.statusText||"Something Went Wrong!"}</p>
      <p>{error.status}</p>
    
    </div>
  )
}

export default NotFound