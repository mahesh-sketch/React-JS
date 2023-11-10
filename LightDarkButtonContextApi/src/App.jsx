import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import ThemeBtn from "./Components/Theme";
import { ThemeProvider } from "./Context/Theme";

function App() {
  const[themeMode, setThemeMode] = useState("Light")

  const lightTheme = ()=>{
    setThemeMode("Light")
  }

  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  
  //actual change in theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("Light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center ">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-center mb-4 ">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
