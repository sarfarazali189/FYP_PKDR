import { MultiForme } from "../component/Mulitiform/MultiForme";
import React, { useState } from "react";

import { Modal,ModalHeader,ModalBody } from "reactstrap";
import type { NextPage } from 'next'
const register: NextPage = () => {

  const [modal,setModal]=useState<boolean >(false);
  
 var authen=true
  if(authen){
    return (
      <>
  <button  className=   " mb-4 m-3 text-4xl text-center text-black block text-gray-700 text-sm font-bold"onClick={() => setModal(true)}>Open Registerion Form</button>
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
  else{

   
    return (
      <>
  <h1>Not Authenticated</h1>
  </>
  )
  
  }

  }
  
  
  export default register
  