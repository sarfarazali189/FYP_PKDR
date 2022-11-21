import { GetServerSideProps } from 'next'
import router, { useRouter } from 'next/router'
import React, { useState } from "react";
function checkuser  (props: any) {
  return (
    <div>checkuser </div>
  )
}

export default checkuser



export const getServerSideProps: GetServerSideProps = async (res) => {

    const a=process.env. NEXT_PUBLIC_UserPoolId
    const d=process.env.NEXT_PUBLIC_accessKeyId
    const e=process.env.NEXT_PUBLIC_secretAccessKey
    const f=process.env.NEXT_PUBLIC_region
  
  
    var AWS = require('aws-sdk');
  
    AWS.config.update({
        accessKeyId: d,
        secretAccessKey: e,
        region: f
    });
  
  
    var params2 = {
        UserPoolId: a,
        Username: "alisjaikh189@gmail.com"
       
    };
    let x:string
      var client = new AWS.CognitoIdentityServiceProvider();
      
      client.adminGetUser(params2, function(err: any, data: any) {
          if (err) {
              console.log("Error",err);
              
                 
                 
                
          } 
          else {
              console.log("user",data);
              return {
                redirect: {
                  destination: "/blog",
                  permanent: false, // make this true if you want the redirect to be cached by the search engines and clients forever
                }, 
              }
              
        
          }
      })
  
  
    
    
    
    return{





      props:{
  
      }
    }
        
    }
  
  
  
  
  