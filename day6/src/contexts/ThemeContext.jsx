import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({children}){
    const [theme,setTheme] = useState(localStorage.getItem("theme")??"dark");
    const colorTheme = theme === "dark" ? "light" : "dark";
    
    useEffect(()=>{
        checkTheme();
    },[theme])

    const checkTheme = () => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme",theme);
    }

    const changeTheme = (newTheme) => {
        if(newTheme==="dark"){
            setTheme("light");
        } else{
            setTheme("dark");
        }
    }

    return <ThemeContext.Provider value={{theme,changeTheme}}>
        {children}
    </ThemeContext.Provider>
}