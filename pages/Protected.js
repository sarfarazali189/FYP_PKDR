import {withSSRContext} from "aws-amplify"
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
import {  Auth } from 'aws-amplify';



 function Protected({authenticated,username}){
    if(!authenticated){
         
        return (
            <>
        <h1>Not Authenticated</h1>
        <button  onClick={checkuser}>checkuser</button>
        </>
        )

    }
    else{
        
    return(
    <>
     <h1>Hello {username} from SSR route!</h1>
    <button  onClick={checkuser}>checkuser</button>
    </>
    )
     
}
}
async function checkuser() {
    const user=await Auth.currentAuthenticatedUser()
    console.log('user',user)

    
  }

export async function getServerSideProps({req}){

const {Auth} = withSSRContext((req))


try{
    const user = await Auth.currentAuthenticatedUser()
    console.log('user',user)


return {
    props:{
        authenticated:true, username:user.username
    }
}

}catch(err){
    console.log("not signed ")
    return {
        props:{
            authenticated:false
        }
    }
}
}
export default Protected 
