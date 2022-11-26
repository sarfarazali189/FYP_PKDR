import { Web3AuthCore } from '@web3auth/core';
import { GetServerSideProps } from 'next'
import router, { useRouter } from 'next/router'
import React, { useState } from "react";
import * as cookie from 'cookie';

function checkuser  () {
  const a=process.env. NEXT_PUBLIC_UserPoolId
  const d=process.env.NEXT_PUBLIC_accessKeyId
  const e=process.env.NEXT_PUBLIC_secretAccessKey
  const f=process.env.NEXT_PUBLIC_region
  var x = document.cookie;
  const cname="identity"

  
  function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }



let EMAIL=getCookie(cname)




  console.log("id",x)

  var AWS = require('aws-sdk');

  AWS.config.update({
      accessKeyId: d,
      secretAccessKey: e,
      region: f
  });


  var params2 = {
      UserPoolId: a,
      Username:EMAIL
     
  };
  var x:number
    var client = new AWS.CognitoIdentityServiceProvider();
    
    client.adminGetUser(params2, function(err: any, data: any) {
      if (err) {
        console.log("Error",err);
        router.push('/register')
      
    } else {
        console.log("user",data);
        //resolve(data);
    }

    }) 



return (
    <div> </div>
  )
}

export default checkuser


/*
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
    var x:number
      var client = new AWS.CognitoIdentityServiceProvider();
      
      client.adminGetUser(params2, function(err: any, data: any) {
          if (err) {
              console.log("Error",err);
              
                 
                 
                
          } 
          else {
            x=1
 
            console.log("u",x);
              
            console.log("user",data);
              
        
          }
      }) 
  
  
    
    
    
    return{


  //    redirect: {
    //    destination: "/blog",
      //  permanent: false, // make this true if you want the redirect to be cached by the search engines and clients forever
      //}, 
    


      props:{
  
      }
    }
        
    }
  
  
  
  
  */