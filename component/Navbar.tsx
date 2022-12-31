import React from 'react'
const Navbar = () => {
  var login = typeof window !== 'undefined' ? localStorage.getItem('login') : null  
   
if(login=="false"|| !login){

  return (
    
    <>

<nav className="relative container mx-auto p-6">
   
   <div className="flex items-center justify-between">
 

   <div>
            <img src="img/logo.png" className="h-16" alt="" />
          </div>    
  
     <div className="hidden space-x-6 md:flex">
      
       <a href="#" className="hover:text-darkGrayishBlue">Products</a>
       <a href="#" className="hover:text-darkGrayishBlue">Features</a>
       <a href="#" className="hover:text-darkGrayishBlue">Carrers</a>
       <a href="#" className="hover:text-darkGrayishBlue">About Us </a>
       <a href="#" className="hover:text-darkGrayishBlue">Team</a>
       <a href="#" className="hover:text-darkGrayishBlue">Contacts</a>
     </div>
   
     <a
       href="#"
       className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
       >Get Started</a
     >

   </div>
 </nav>
</>
  )


}
else{

return (
    
  <>

<nav className="relative container mx-auto p-6">
  

 <div className="flex items-center justify-between">
 <div>
            <img src="img/logo.png" className="h-16" alt="" />
          </div>    
 
  <div className="hidden space-x-6 md:flex">    
     <a href="#" className="hover:text-darkGrayishBlue">Products</a>
     <a href="#" className="hover:text-darkGrayishBlue">Features</a>
     <a href="#" className="hover:text-darkGrayishBlue">Carrers</a>
     <a href="#" className="hover:text-darkGrayishBlue">About Us </a>
     <a href="#" className="hover:text-darkGrayishBlue">Team</a>
     <a href="#" className="hover:text-darkGrayishBlue">Contacts</a>
   </div>
 
   <a
     href="#"
     className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
     >logout</a
   >

 </div>
</nav>
</>
)

}
}

export default Navbar;



