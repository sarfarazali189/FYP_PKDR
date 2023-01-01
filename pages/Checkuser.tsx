import { GetServerSideProps } from 'next'
import router, { useRouter } from 'next/router'
import React, { useEffect, useState } from "react";


function checkuser  () {

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



  const router=useRouter()
  const login = typeof window !== 'undefined' ? localStorage.getItem('login') : null  
   
    if(login=="false"|| !login){
      
      typeof window !== 'undefined' && router.push("/Unauth")
  
    }
  
else{
  
  const a=process.env. NEXT_PUBLIC_UserPoolId
  const d=process.env.NEXT_PUBLIC_accessKeyId
  const e=process.env.NEXT_PUBLIC_secretAccessKey
  const f=process.env.NEXT_PUBLIC_region
 // var x = document.cookie;
  const cname="identity"
//  console.log("id",x)

  var AWS = require('aws-sdk');

  AWS.config.update({
      accessKeyId: d,
      secretAccessKey: e,
      region: f
  });


let EMAIL=getCookie(cname)
  var params2 = {
      UserPoolId: a,
      Username:EMAIL
     
  };

  localStorage. removeItem(cname);

  var x:number
    var client = new AWS.CognitoIdentityServiceProvider();
    
    client.adminGetUser(params2, function(err: any, data: any) {
      if (err) {
        //console.log("Error",err);
        router.push('/register')
      
    } else {
        console.log("user",data);
  
      

    }

    }) 

      
  }
return (
    <div> </div>
  )
}

export default checkuser

