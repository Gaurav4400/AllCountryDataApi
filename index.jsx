import { createRoot } from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import App from'./App.jsx'
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./components/Home.jsx";
import CountryDetails from "./components/CountryDetails.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App /> ,
      errorElement: <ErrorPage />,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:"/:country",
            element: <CountryDetails />
        }
      ]
    },
  ]);
const root= createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)