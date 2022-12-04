import { GetServerSideProps } from "next";
import { createUser, updateUser } from "../src/graphql/mutations";
import { getCookieParser } from 'next/dist/server/api-utils';
//import { Cookies } from 'next/dist/server/web/spec-extension/cookies';
import { API } from "@aws-amplify/api";
import * as cookie from 'cookie';
import  Cookie from 'js-cookie'
import router, { useRouter } from 'next/router'
import { Error1 } from "../component/Errors/Error1";
import Error2 from "../component/Errors/Error2";
import Error3 from "../component/Errors/Error3";
function CreateUser() {

  const router = useRouter()   

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
    
    < div className="px-4 py-5 my-5 text-center" >
    <h1 className="display-5 fw-bold">Thanks for Registeration </h1>
    </div>

    <button onClick={Redirect}  type="button" className="btn btn-outline-secondary btn-lg px-4">
          Signin Now 
        </button>
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
             <Error2/>
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
                    

                  
              },
          },
      });
      console.log(result);
     // console.log(currentUser);
  } catch (err) {
      console.log(err);
      <Error1/>
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
             <Error3/>
         }
     })




return{
  props:{}
}
    
}

/*


export const getServerSideProps: GetServerSideProps = async () => {

  const a=process.env.UserPoolId
  const e=process.env.secretAccessKey
  const f=process.env.NEXT_PUBLIC_region
  const b=process.env. NEXT_PUBLIC_TemporaryPassword
  const c=process.env. NEXT_PUBLIC_GroupName
  const d=process.env.NEXT_PUBLIC_accessKeyId

  console.log('user',a)

  var params = {
      UserPoolId: a,
      Username: "alisjaikh189@gmail.com",
      TemporaryPassword: b,
      
      
      UserAttributes: [
//        {
  //        Name: "email",
    //      Value: formState.email
      //  },
        {
          Name: "email_verified",
          Value: "true"
        }
       
      ]
  };
  
  var params1 = {
      UserPoolId: a,
      Username:  "alisjaikh189@gmail.com",
      
      GroupName: c
  
     
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
             //resolve(data);
         }
     })




return{
  props:{}
}
    
}
*/