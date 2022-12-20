import {createContext, useState} from 'react'

export const ColorModeContext = createContext({ mode: 'light' , toggleColorMode: () => {} });

export const ColorModeProvider = ({children} : any ) => {
    const [mode, setMode] = useState("light");
    const toggleColorMode = () => {
      setMode(mode === "light" ? "dark" : "light");
    };

    const color = mode === "light" ? "#333" : "#FFF";
    const backgroundColor = mode === "light" ? "#FFF" : "#333";
  
    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;
  
    return (
      <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
        {children}
      </ColorModeContext.Provider>
    );
}