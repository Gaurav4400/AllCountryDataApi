import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider(props){
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
    return (
        <ThemeContext.Provider value={[isDark, setIsDark]} >
            {props.children}
        </ThemeContext.Provider>
    )
}