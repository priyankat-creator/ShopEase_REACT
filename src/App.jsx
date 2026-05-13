
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";




function App() {
  
  const [isDark,setTheme] = useState(false);
useEffect(()=>{
    const storedTheme = localStorage.getItem("theme")
    if(storedTheme){
        setTheme("dark");
    }
},[])

  const themeHandler = ()=>{
    setTheme(isD => {
        const newTheme = !isD;
        localStorage.setItem("theme",newTheme ? "dark":"light")

        return newTheme;
    })
  }
  return (
    <div className={isDark ? "dark":"light"}>
            <Header />

            <button onClick={themeHandler}>

        Switch to {isDark ? "Light" : "Dark"} Mode

      </button>

   
     


     
    
    <Home />

    <Products />

   

      
    <Contact />
    <Footer />
      </div>
  );
}
export default App;


