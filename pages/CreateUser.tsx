import App from '../component/aws-cognito-login/App'
import { createUser, updateUser } from "../src/graphql/mutations";
//import { Cookies } from 'next/dist/server/web/spec-extension/cookies';
import { API } from "@aws-amplify/api";
import * as cookie from 'cookie';
import router, { useRouter } from 'next/router'
import Error from 'next/error'
import { result } from 'lodash';
function CreateUser() {

  const Redirect = async () => {
    
   // router.push("/")
    
  }

  /*
  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    
    setProvider(null);
    const windowFeatures = "left=auto,top=auto,width=auto,height=auto";
    window.open(
      "https://pkdrfinancetest.auth.us-west-2.amazoncognito.com/logout?client_id=74qh6dc32eau2n57pe2j1513so&logout_uri=http://localhost:3000&redirect_uri=http://localhost:3000"
    );
  };


*/

    return(
      <>
    

<div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
  

  <h2 className=" text-black font-bold py-2 px-4 mt-3 rounded">Thanks for Registeration </h2>
</div>
   

<div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
  

  <button className="bg-orange-500 text-white hover:bg-orange-400 font-bold py-2 px-4 mt-3 rounded" onClick={Redirect}>Signin Now</button>
</div>

      </>
      
    )
}

export default  CreateUser


export const getServerSideProps: any = async (context: { req: { headers: { cookie: string; }; }; }) => {
  
  const a=process.env.NEXT_PUBLIC_UserPoolId
  const e=process.env.NEXT_PUBLIC_secretAccessKey
  const f=process.env.NEXT_PUBLIC_region
  const b=process.env. NEXT_PUBLIC_TemporaryPassword
  const c=process.env. NEXT_PUBLIC_GroupName
  const d=process.env.NEXT_PUBLIC_accessKeyId
  const parsedCookies = cookie.parse(context.req.headers.cookie);
  console.log("user",parsedCookies)
  
  const x=parsedCookies


const EMAIL=x['email']
const CITY=x['city']
const COUNTRY=x['country']
const PHONE=x['phonenumber']
const CNIC=x['cnic']
const ID=x['email']
const Name=x['name']
const FATH=x['fathername']
const GEN=x['gender']
const dob=x['DOB']
const add=x['address']

var params = {
      UserPoolId: a,
      Username: EMAIL,   
      TemporaryPassword: b,
      
      
      UserAttributes: [
        {
          Name: "email",
          Value:EMAIL,
        },
        
        {
          Name: "email_verified",
          Value: "true"
        }
       
      ]
  };
  


     var AWS = require('aws-sdk');
     AWS.config.update({
         accessKeyId: d,
         secretAccessKey:e,
         region: f
         
     });
     var client = new AWS.CognitoIdentityServiceProvider();
     client.adminCreateUser(params, function(err: any, data: any) {
         if (err) {
             console.log("EE",err);
           //  reject(err);
         } else {
             console.log("DDD",data);
         }
     })

     try {
      const result = await API.graphql({
          query: createUser,
      
          variables: {
              input: {
                  id: EMAIL,
                  name:Name ,
                   fatherName: FATH,
                    DOB: dob,
                  gender:GEN,
                    phonenumber:PHONE,
                      city:CITY,
                     country: COUNTRY,
                     cnic:CNIC,
                     address:add,
                    

                  
              },
          },
      });
      console.log(result);
     // console.log(currentUser);
    
  } catch (err) {
      console.log(err);
    
    }


     var params1 = {
      UserPoolId: a,
      Username:EMAIL,
      GroupName: c
  
     
     };

     var client =await  new AWS.CognitoIdentityServiceProvider();
     client.adminAddUserToGroup(params1, function(err: any, data: any) {
         if (err) {
             console.log("EE",err);
            
           //  reject(err);
         } else {
             console.log("g",data);
             //resolve(data);
         }
     })




return{
  props:{ }
}
    
}

