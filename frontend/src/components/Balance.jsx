import { useState, useEffect } from "react"
import axios from "axios";

export const Balance = ({onClose,pop_func}) => {
    const [amount,setAmount] = useState(0);
    const token = localStorage.getItem("token");
    if(!token) return null;
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
                'Authorization': 'Bearer ' + token,
              }
        }).then((response)=>{
            setAmount(response.data.balance);
            localStorage.setItem("userId",response.data.userId);
        }
        ).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              pop_func(error.response.status,error.response.data.message);
              onClose();
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          })
    });
             
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs  {amount}
        </div>
    </div>
}