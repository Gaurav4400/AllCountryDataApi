import useTheme from "../hooks/useTheme";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    if(!error){
      const [isDark]= useTheme()
      return(
        <main className={isDark ? 'dark' : ''}>
        <div id="error-page">
        <h1>Oops!</h1>
        <p>No country with that name.</p>
      </div>
      </main>
      )
    }
    return (
      <main>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p> 
          <i>{error.status +' '+ error.statusText || error.message}</i>
        </p>
      </div>
      </main>
    )
}

