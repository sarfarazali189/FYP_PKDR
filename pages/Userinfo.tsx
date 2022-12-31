
import React, { useState, useMemo } from "react";
const Userinfo = () => {
  
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
  const cname="identity"

let EMAIL=getCookie(cname)

var name, email


  const AWS = require("aws-sdk")
  AWS.config.update({ region: "us-west-2" })
  const dynamoDB = new AWS.DynamoDB.DocumentClient()
var params = {
  TableName: "User-eoijh3vp4bce5mvuxe5jidk7xi-dev",
      Key: {
        id: EMAIL,
      }, 
}


var d=dynamoDB.get(params, function (err: any, data: any) {
  if (err) {
      console.log(err)
  }
  else  {
    // console.log(data.Item)
    name=data.Item.name
    email=data.Item.id
    // console.log(name)        
    // console.log(email)
    return data;

}
})
console.log("Data",d)
// const {data}=await dynamoDB.get(params).promise();
// console.log(data)
//     // console.log(data.Item)
//     // name=data.Item.name
//     // email=data.Item.id
//     // console.log(name)        
//     // console.log(email)

  return (
    <>





    <div>
    <main className="relative z-0 flex-1 pb-8 px-6 bg-white">
              <div className="grid pb-10  mt-4 ">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
                      <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out">
                          <div className="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                            <div>
                              <h3 className="text-center text-white text-lg">
                                  Welcome {name}
                              </h3>
                              <h3 className="text-center text-white text-3xl mt-2 font-bold">
                              </h3>
                              </div>
                          </div>
                      </div>
                       <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out">
                          <div className="absolute inset-0 bg-yellow-600 bg-opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                            <div>
                              <div className="text-white text-lg flex space-x-2 items-center">
                                <div className="bg-white rounded-md p-2 flex items-center">
                                  <i className="fas fa-toggle-off fa-sm text-yellow-300"></i>
                                </div>
                                <p></p>
                              </div>
                              <h3 className="text-white text-3xl mt-2 font-bold">
                              </h3>
                               <h3 className="text-white text-lg mt-2 text-yellow-100 ">
                              </h3>
                            </div>
                          </div>
                      </div>
                       <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-o">
                          <div className="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                            <div>
                              <div className="text-white text-lg flex space-x-2 items-center">
                                <div className="bg-white rounded-md p-2 flex items-center">
                                  <i className="fas fa-clipboard-check fa-sm text-blue-800"></i>
                                </div>
                                <h2></h2>
                              </div>
                              <h3 className="text-white text-3xl mt-2 font-bold">
                              
                              </h3>
                               <h3 className="text-white text-lg mt-2 ">
                               
                              </h3>
                            </div>
                          </div>
                      </div>        
                    </div>
                    
        
              </div>
          </main>


    

    </div>
    </>
  )
}

export default Userinfo

