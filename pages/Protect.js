import { withSSRContext } from 'aws-amplify'
import {  Auth } from 'aws-amplify';

import { Cache } from 'aws-amplify';
function Protect({ authenticated, username }) {

 
async function checktoken(){
 
 
}


  function getUser() {
        return Auth.currentAuthenticatedUser()
          .then(userData => userData)
          .catch(() =>  console.log('Not signed in'));
      }

  async function checkuser() {
    const user=await Auth.currentAuthenticatedUser()
    console.log('user',user)

    
  }


    return(
      <>
        <button  onClick={checktoken}>checktoken</button>
        <button  onClick={checkuser}>checkuser</button>
        <button  onClick={getUser}>getUser</button>
      </>
      
    )
}



export default Protect