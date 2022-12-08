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
  <button  className=   " mb-4 m-3 text-5xl text-center text-black block text-gray-700 text-sm font-bold"onClick={() => setModal(true)}>Open Registerion Form</button>
  <br />
      <br />


      <br />
      <br />
      <br />
      <br />


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <br />
      <br />
      


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
  