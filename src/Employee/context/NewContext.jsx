import { createContext } from "react";

export let ThemeContext=createContext();


const ThemeProvider=({children})=>{
    return(
        <ThemeContext.Provider value={{}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;