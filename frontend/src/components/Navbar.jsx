import { useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import {Heart, ShoppingBag} from "lucide-react"
import {assets} from "../assets/assets.js"
import { AppContext } from "../contex/AppContex.jsx"


const Navbar = () => {

    const {navigate} = useContext(AppContext)
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const isActive = (path)=>{
        return location.pathname == path? "text-[var(--color-secondary)] border-b border-[var(--color-primary)]": "";
    }
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

           <Link>
            <img src= {assets.logo} alt=""  className="w-42"/>
           </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <Link to={'/'} className={isActive("/")} >Home</Link>
                <Link to={'/shop'} className={isActive("/shop")}>Shop</Link>
                <Link to={'/about'} className={isActive("/about")}>About</Link>
                <Link to={'/contact'} className={isActive("/contact")}>Contact</Link>
                

                

                <div className="relative cursor-pointer">
                    <ShoppingBag className="w-5 h-5"/>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-[var(--color-primary)] w-[18px] h-[18px] rounded-full">3</button>
                </div>

                <div className="relative cursor-pointer">
                    <Heart className="w-5 h-5"/>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-[var(--color-primary)] w-[18px] h-[18px] rounded-full">1</button>
                </div>

                <button onClick={()=>navigate("/login")} className="cursor-pointer px-8 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition text-white rounded-full">
                    Login
                </button>
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <Link onClick={()=>{setOpen(false)}} to={'/'} className={isActive("/")} >Home</Link>
                <Link  onClick={()=>{setOpen(false)}}to={'/shop'} className={isActive("/shop")}>Shop</Link>
                <Link onClick={()=>{setOpen(false)}} to={'/about'} className={isActive("/about")}>About</Link>
                <Link onClick={()=>{setOpen(false)}} to={'/contact'} className={isActive("/contact")}>Contact</Link>

                <button onClick={()=>{setOpen(false);navigate("/login")}} className="cursor-pointer px-6 py-2 mt-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] transition text-white rounded-full text-sm">
                    Login
                </button>
            </div>

        </nav>
    )
}

export default Navbar