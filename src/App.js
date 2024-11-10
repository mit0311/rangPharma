import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services.jsx';
import Clients from './components/clients/Clients.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children : [
        {
          path: '/',
          element: <>
             <Home/>
             <Services/>
             <Clients/>
             <Contact/>
             <Footer/>
          </>,
        },
        {
          path: '/services',
          element: <Services/>,
        },
        {
          path: '/clients',
          element: <Clients/>,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ]
    },

  ]);

  return <RouterProvider router={router} />;
 
}

export default App;
