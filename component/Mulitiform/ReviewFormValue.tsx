import { Button, ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { IFormState } from "./MultiForme";
import React, { useState } from "react";
import { createUser, updateUser } from "../../src/graphql/mutations";
import { API } from "@aws-amplify/api";
import { CognitoIdentityProviderClient, AddCustomAttributesCommand } from "@aws-sdk/client-cognito-identity-provider";


interface IProps {
    formState: IFormState;
    previousStep: () => void;
}

export function ReviewFormValue(props: IProps) {
    const { formState, previousStep } = props;

    const onConfirm = () => {
        console.log('onConfirm', onConfirm);
      };


    var params = {
        UserPoolId: 'us-west-2_lQGLo8FMF',
        Username: "alisjaikh189@gmail.com",
        TemporaryPassword: "Abc@3212434355",
        
        UserAttributes: [
          {
            Name: "email",
            Value: formState.email
          },
          {
            Name: "email_verified",
            Value: "true"
          }
         
        ]
    };
    
    var params1 = {
           UserPoolId: 'us-west-2_lQGLo8FMF',
           Username: formState.email,
           GroupName: 'Users',
       
       };
    


    const submitHandler = async (event: { preventDefault: () => void; }) => {    
        event.preventDefault();

        var AWS = require('aws-sdk');
        AWS.config.update({
            accessKeyId: "AKIA3RQLSBPSRUXSYHNO",
            secretAccessKey: "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",
            region: "us-west-2"
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



        try {
            const result = await API.graphql({
                query: createUser,
            
                variables: {
                    input: {
                        id: formState.email,
                        name: formState.name,
                         fatherName: formState.fatherName,
                          DOB: formState.DOB,
                        gender:formState.gender,
                          phonenumber: formState.phonenumber,
                            city:formState.city,
                           country: formState.country,
                           cnic:formState.cnic,
                          

                        
                    },
                },
            });
            console.log(result);
           // console.log(currentUser);
        } catch (err) {
            console.log(err);
        }
    
        
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
    


    };


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
                <Button className="mr-4 my-3" onClick={previousStep} variant="primary" type="submit">
                    Previous
                </Button>
                <Button onClick={submitHandler } variant="primary" >
                    Confirm
                </Button>
                
                           </Form>
        
        </div>


</>
    )
}