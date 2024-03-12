import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe.jsx';
import ContactMe from './pages/ContactMe.jsx';
import Resume from './pages/Resume.jsx';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
         path: '/AboutMe',
         element: <AboutMe />
      }, {
        path: '/Contact',
        element: <ContactMe />
      }, {
        path: '/Resume',
        element: <Resume />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
