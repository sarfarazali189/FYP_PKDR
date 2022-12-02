import { Button, ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./MultiForme";
import React, { useState } from "react";
import { createUser, updateUser } from "../../src/graphql/mutations";
import { API } from "@aws-amplify/api";
import { CognitoIdentityProviderClient, AddCustomAttributesCommand } from "@aws-sdk/client-cognito-identity-provider";
import { GetServerSideProps } from "next";
import { useRouter } from 'next/router'
import CreateUser from "../../pages/CreateUser";

interface IProps {
    formState: IFormState;
    previousStep: () => void;
}





export function ReviewFormValue(props: IProps) {
    const { formState, previousStep } = props;

const router = useRouter()        
const Confirm=()=>{
   
console.log("r",formState)
document.cookie = `email=${formState.email}`; 
document.cookie = `cnic=${formState.cnic}`; 

document.cookie = `name=${formState.name}`; 
document.cookie = `phonenumber=${formState.phonenumber}`; 
document.cookie = `DOB=${formState.DOB}`; 
document.cookie = `city=${formState.city}`;          
document.cookie = `country=${formState.country}`; 
document.cookie = `fathername=${formState.fatherName}`; 
document.cookie = `gender=${formState.gender}`; 
router.push("/CreateUser")

}



    return (
 <>       
        <div>
            <ListGroup variant="flush">
                <ListGroup.Item>Name: {formState.name}</ListGroup.Item>
                <ListGroup.Item>Father Name: {formState.fatherName}</ListGroup.Item>
                <ListGroup.Item>GENDER {formState.gender}</ListGroup.Item>
                <ListGroup.Item>Phone Number: {formState.phonenumber}</ListGroup.Item>
                <ListGroup.Item>Email: {formState.email}</ListGroup.Item>
                <ListGroup.Item>CNIC: {formState.cnic}</ListGroup.Item>
                <ListGroup.Item>DATE OF BIRTH: {formState.DOB}</ListGroup.Item>
                <ListGroup.Item>City: {formState.city}</ListGroup.Item>
                <ListGroup.Item>Country: {formState.country}</ListGroup.Item>
            </ListGroup>
            <Form>
                <Button onClick={previousStep}  className="btn btn-outline-secondary btn-lg px-4" variant="primary" type="submit">
                    Previous
                </Button>
                <Button onClick={Confirm } variant="primary"    className="btn btn-outline-secondary btn-lg px-4">
                    Confirm
                </Button>
                
                           </Form>
        
        </div>


</>
    )
}

/*

export const getServerSideProps: GetServerSideProps = async () => {

    const a=process.env.NEXT_PUBLIC_UserPoolId
    const e=process.env.NEXT_PUBLIC_secretAccessKey
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
          {
            Name: "email",
            Value: "alisjaikh189@gmail.com",
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
               //resolve(data);
           }
       })
  
  
  
  
  return{
    props:{}
  }
      
  }

*/
