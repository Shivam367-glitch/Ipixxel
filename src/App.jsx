import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Work from './pages/Work/Work';
import Blog from './pages/Blog/Blog';
import WebDev from "./pages/WebDev";
import AppDev from "./pages/AppDev";
import UiUx from "./pages/UiUx";
import DigitalMarketing from "./pages/DigitalMarketing";
import ItConsulting from "./pages/ItConsulting";
import GraphicDesign from "./pages/GraphicDesign";
import BlogDetail from './components/BlogDetail';
 
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from './components/ScrollToTop';

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header className="header" /> 
      <ScrollToTop/>
      <main className="main-content">
        <Outlet />
      </main>
      <Analytics/>
      <Footer className="footer" />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'about-us',
          element: <About />,
        },
        {
          path: 'contact-us',
          element: <Contact />,
        },
        {
          path: 'our-works',
          element: <Work />,
        },
        {
          path: 'blogs',
          element: <Blog />,
        },{
          path:'blogs/:blogId',
          element:<BlogDetail/>,
          
        },
        {
          path: 'web-development',
          element: <WebDev />,
        },
        {
          path: 'it-consulting',
          element: <ItConsulting />,
        },
        {
          path: 'graphic-designing',
          element: <GraphicDesign />,
        },
        {
          path: 'digital-marketing',
          element: <DigitalMarketing />,
        },
        {
          path: 'mobile-app-development',
          element: <AppDev />,
        },
        {
          path: 'ux-ui-design',
          element: <UiUx />,
        },
      ],
      errorElement: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
