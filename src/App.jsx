import { Button } from "@material-tailwind/react";
import { Routes,Route } from "react-router"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import { useEffect } from "react";
import Product from "./pages/Product";
import ProductGallery from "./ProductGallery";
function App() {
  useEffect(()=>{if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }},[])
  return (
    <div className="dark:text-red-900 text-2xl ">
      <Header />     
      hekkkkkkko
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sing-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/product/:id" element={<ProductGallery />} />
          <Route path="/cart" element={<Product />} />

        </Routes>
    </div>
  )
}

export default App
