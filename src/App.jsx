
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'
import About from './pages/About/About'

const  AppLayout=()=>{


  return(
    <div className="app-layout">
      <Header className="header" />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer className="footer"/>
    </div>
  )

}
function App() {

  const appRoute=createBrowserRouter([{
    path:'/',
    element:<AppLayout/>,
    children:[{
      path:'/',
      element:<Home/> 
    },{
      path:'/about-us',
      element:<About/>
    }
  
  ],
    errorElement:<NotFound/>
  }])

  return (
    <RouterProvider router={appRoute} />
  )
}

export default App
