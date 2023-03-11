import React, { useState, useMemo, useEffect } from "react";
import register from "./register";
const Userinfo = () => {

let x=1
  
  const [name, setName] = useState<any>('');
  const [email, setEmail] = useState<any>('');
  const [Gender, setGender] = useState<any>('');
  
  const [Fathername, setfather] = useState<any>('');
  const [Cnic, setCnic] = useState<any>('');
  const [City, setcity] = useState<any>('');
  const [Country, setcountry] = useState<any>('');
  const [Address, setaddress] = useState<any>('');

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

  const cname = "identity";
  const emailconst:any = getCookie(cname);
  useEffect(() => {
    fetchUserData(emailconst);
  }, [email]);

  function fetchUserData(email: string) {
    const AWS = require("aws-sdk");
    AWS.config.update({ region: "us-west-2" });
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
  
    const params = {
      TableName: "User-eoijh3vp4bce5mvuxe5jidk7xi-dev",
      Key: {
        id: emailconst,
      },
    };

  
try {
  dynamoDB.get(params, (err: any, data: any) => {
      if (err) {
        console.error(err);
      
      } else {
        if(  typeof(data.Item)=="object"){
          console.log("Data", data)
        setName(data.Item.name);
        setEmail(data.Item.id);
        setCnic(data.Item.cnic)
        setfather(data.Item.fatherName)
        setcountry(data.Item.country)
        setcity(data.Item.city)
        setaddress(data.Item.address)
        setGender(data.Item.Gender)
        }
        else{
          setName(null);
        setEmail(null);
        setCnic(null);
        setfather(null)
        setcountry(null)
        setcity(null)
        setaddress(null)
        setGender(null)
        }
      }
    });
} catch (error) {
  console.log("error")
}
    
  }
  
  const data = useMemo(() => {
    return { name, email,Fathername,Cnic,City,Country,Address,Gender };
  }, [email]);

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
                                  Welcome 
                              </h3>
                              <h3 className="text-center text-white text-3xl mt-2 font-bold">{data.name}
                              </h3>
                              </div>
                          </div>
                      </div>
                       <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out">
                          <div className="absolute inset-0 bg-yellow-600 bg-opacity-75 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                            <div>
                              <div className="text-center text-white text-lg flex space-x-2 items-center">
                                <div >
                                  <i className="fas fa-toggle-off fa-sm text-yellow-300"></i>
                                </div>
                                <h3 className="text-center text-white text-lg"> Email </h3>
                              </div>
                              <h3 className="text-white text-1xl mt-2 font-bold">
                             
                       </h3>
                               <h3 className="text-center text-white  mt-2 font-bold">{data.email}
                              </h3>
                            </div>
                          </div>
                      </div>
                       <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-o">
                          <div className="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                          <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                            <div>
                              <div className="text-white text-lg flex space-x-2 items-center">
                                <div>
                                  <i className="fas fa-clipboard-check fa-sm text-blue-800"></i>
                                </div>
                                <h2>Balance</h2>
                              </div>
                              <h3 className="text-white text-3xl mt-2 font-bold">
                             0.00 PKDR
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
  );
};

export default Userinfo