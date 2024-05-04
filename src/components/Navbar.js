import Product1 from "./Product1"

const Navbar = ()=>{

    return (
        <div className="flex  justify-between bg-slate-600 mx-auto font-bold text-xl py-4 px-6 my-4 shadow-2xl rounded">
            <div>
                <h3>ABC</h3>
            </div>
            <div className="flex gap-12 justify-between">
                <div className="flex gap-8 ">
                <a href="https://www.facebook.com/"
                >Home</a>
                <p>About</p>
                <Product1/>
                
                </div>
                <div className="flex gap-7">
                <p className="border border-black p-2 rounded-full">SignUp</p>
                <p className="border border-black p-2 rounded-full">Login</p>

                </div>
               
            </div>


        </div>
    )
}

export default Navbar