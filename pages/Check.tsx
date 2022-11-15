import React from 'react'
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router'





interface Props {
    ema: string
}
  

function Check({ ema }: Props)  {
    console.log("Email",ema);
 
    const router = useRouter()
    var AWS = require('aws-sdk');
    
    AWS.config.update({
        accessKeyId: "AKIA3RQLSBPSRUXSYHNO",
        secretAccessKey: "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",
        region: "us-west-2"
    });

    var params2 = {
        UserPoolId: 'us-west-2_lQGLo8FMF',
        Username: "sarfarazalihaikh189@gmail.com",
       
    };



    const admincheck=()=>{
        var AWS = require('aws-sdk');
        
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
    
    }
















  return (
    <>
    <div>Check</div>
    <Button onClick={admincheck } variant="primary" >
    checkuser
</Button>
</>
  )
}

export default Check

