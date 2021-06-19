import React, { useContext,useState } from 'react'
import { UserContext } from '../../App';


import {useHistory} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Events.css';

import '../basic/Loading.css';
import '../basic/button.css';

import Base from '../basic/Base'

import { createDonation } from '../apicalls/auth/eventcalls';

const loadScript=(linkof)=>{
    return new Promise((resolve=>{
        const script=document.createElement("script");
        script.src=linkof
        document.body.appendChild(script);
        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false);
        }
        document.body.appendChild(script)
        
    }))
    
 }
 
function Donation() {
    const {state}=useContext(UserContext);
    // eslint-disable-next-line
    const [loading,setLoading]=useState(false);
    const history=useHistory();
    const [amount,setAmount]=useState(10);
   
    const token=localStorage.getItem("jwt");
    

  
    const user=JSON.parse(localStorage.getItem("user"));
   
   async function showRazorPay(){
       if(amount<=0){
           toast.error("Amount not defined");
           return;
       }
       setLoading(true);
        const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if(!res){
            alert('Razor pay SDK failed');
            return 
        }
        const data = await fetch(`/api/razorpay/${user._id}`, { method: 'POST', headers: {
            Accept: "application/json",
            "Authorization":`Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({amount:amount}) 
    }).then((t) =>
   

        t.json()
        
    )

    setLoading(false);
        
        const  options = {
            key:  'rzp_test_LiMeEbFXgq98S8' ,
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'For COVI-HELP Donations',
			description: 'Thank you for donation',
			
			handler: function (response) {
               fetch(`/api/verification/${user._id}`,{method:"POST",headers:{
                    Accept: "application/json",
                    "Authorization":`Bearer ${token}`,

                    "Content-Type": "application/json"
                },
                body:JSON.stringify({ payment_id:response.razorpay_payment_id,
                    order_id:response.razorpay_order_id,
                    signature:response.razorpay_signature})
                   
            }).then(t=>{
                
               return  t.json()
            }).then(ans=>{
               
               createDonation({amount,order_id:ans.order_id,payment_id:ans.payment_id},user._id,token).then(res=>{
                  if(res){
                      if(res.msg){
                          toast(res.msg);
                          setTimeout(() => {
                            history.push('/')
                        }, 2000);
                      }
                      if(res.error){
                          toast.error(res.error);
                      }
                  }
               })
            })
           
				
			},
			prefill: {
				name:state.firstname+" "+state.lastname,
				email: state.email,
				phone_number:''
			}
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open()
       

    }
 
   
        
    const rightSide=()=>{
       
        return( <>
         <div class="container px-4 py-5 mx-auto">
      <div class="card card0">
          <div class="d-flex flex-lg-row flex-column-reverse">
              <div class="card card1">
                  <div class="row justify-content-center my-auto">
                      <div class="col-md-8 col-10 my-5">
                          <div class="row justify-content-center px-3 mb-3"></div>
                          <h3 class="mb-5 text-center heading">DONATION!!!</h3>
                          <h6 class="msg-info">Please DONATE for the Needy People</h6>
                          <form  >

                        


                          <div class="form-group">
                            
                             <label class="form-control-label text-muted">Amount</label> 
        <input  type="text"name="amount"className="form-control"placeholder="Please fill in the amount" onChange={event=>{setAmount(event.target.value)}} value={amount} /> </div>
                   
                         
               
                      </form>
                      <div class="row justify-content-center my-3 px-3"> 
                          <button class="btn-block btn-color" onClick={showRazorPay}>Pay Now</button> </div>
                      </div>
                      </div>  
                  </div>
                
                 
              <div class="card card2">
                  <div class="my-auto mx-md-5 px-md-5 right">
                      <h3 class="text-white">Our MOTIVE IS HELP!!</h3> <small class="text-white">COVI HELP is a small organization formed which has the main motive to help people to get the resources during the pandemic</small>
                  </div>
              </div>
          </div>
      </div>
  </div>
        </>  )
            
        
    }

    

    return (
      <>
      <Base >
          <ToastContainer/>
          <div >
   
          <div className="container">
              <div className="row">
                
                  <div className="col-sm-12 ">
                      {rightSide()}
                      
                      </div>
              </div>
          </div>
    </div>
      </Base>

      </>
    )
}

export default Donation
