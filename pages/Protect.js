import { withSSRContext } from 'aws-amplify'
import {  Auth } from 'aws-amplify';

import { Cache } from 'aws-amplify';
import Check from "./Check"
function Protect({ authenticated, username }) {
async function checktoken(){
  Auth.currentSession().then(res=>{
    let accessToken = res.getAccessToken()
    let jwt = accessToken.getJwtToken()
    console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
    console.log(`myJwt: ${jwt}`);
  })

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