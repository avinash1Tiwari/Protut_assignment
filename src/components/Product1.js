import { useState } from "react"
import {motion, AnimatePresence} from 'framer-motion'
const Product1 = () =>{

  return(

    <div className ="flex  justify-center bg-slate-600 px-3">
      <Items href="#" Itemcontent = {PriceContent} className = "font-bold text-xl">Products</Items>
      
    </div>

  )
}

const Items = ({children,href,Itemcontent}) =>{

  const [open,setOpen] = useState(false);

  const showItem = open && Itemcontent

  return(
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
    <div className=" group relative  h-fit w-fit">
      <a href={href} className="relative text-black">{children}
        <span 
        style={{
          transform : showItem ?  "scale(1)" : "scale(0)",
        }}
        className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left 
        rounded-full bg-indigo-300 transition-transform duration-300 ease-out"></span> 
      </a>

      <AnimatePresence>
      {
        showItem && (
          <motion.div
          initial = {{opacity:0,y:15}}
          animate = {{opacity:1,y:0}}
          exit = {{opacity:0,y:15}}
          style={{x : "-50%"}}
          transition={{duration:0.3,ease:'easeOut'}}

           className=" absolute left-1/2 top-12 bg-white text-black">
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent"></div>

            <div className="absolute left-1/2 top-0 h-4 w-4
            -translate-x-1/2  -translate-y-1/2 rotate-45 bg-white"></div>
            <Itemcontent/>
          </motion.div>
        )
      }
      </AnimatePresence>

    </div>
    </div>
  )
}


const PriceContent = () =>{
  return(
    <div className="w-64 bg-white p-6 shadow-xl">
    <div className="mb-3 space-y-3">
      <a href="# " className=" font-semibold block  hover:underline">
        Product-1
      </a>
      <a href="# " className="block font-semibold hover:underline">
        Product-2
      </a>
    </div>
    <div className="mb-6 space-y-3">
      <a href="# " className="block  font-semibold hover:underline">
       Product-3
      </a>
      <a href="# " className="block  font-semibold hover:underline">
        Product-4
      </a>
    </div>
    <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
      Contact Us
    </button>
  </div>
  )
}

export default Product1