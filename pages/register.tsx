import { MultiForme } from "../component/Mulitiform/MultiForme";
import React, { useEffect, useState } from "react";
import { Modal,ModalHeader,ModalBody } from "reactstrap";
import type { NextPage } from 'next'
import { useRouter } from "next/router";
const register: NextPage = () => {
  
const [modal,setModal]=useState<boolean >(false);
const router=useRouter()
useEffect(()=>{
  let login=localStorage.getItem("login");
  if(login=="false"|| !login){
    
    router.push("/Unauth")

  }
}

)
  
    return (
      <>

<div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
  

  <button className="bg-orange-500 text-white hover:bg-orange-400 font-bold py-2 px-4 mt-3 rounded" onClick={() => setModal(true)}>Register Now</button>

  <br />
      <br /><br /> <br />

</div>
  <br />
      <br />

      <br />
      <br />
      <br />
      <br /> <br />  <br />      <br />
      <br />
      <br />
      <br />
      <br />  <br />  <br />      <br />

 <div>
    <Modal
     size="lg"
     isOpen={modal}
     toggle={()=>setModal(!modal)}>
       <ModalHeader
       toggle={()=>setModal(!modal)}>
       
       </ModalHeader>
     
       <ModalBody>
        <MultiForme/>
       </ModalBody>
     </Modal>
 
 
 </div>
 </>
     


  

    )
  
  }
  
  
  export default register
  