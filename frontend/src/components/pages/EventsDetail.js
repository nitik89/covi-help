import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  getOxygenById } from '../apicalls/auth/eventcalls';
import Base from '../basic/Base';
import './Events.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../basic/button.css';



function EventsDetail() {                                             
   const {oxygenid} =useParams();
  
   const [details,setDeatils]=useState({})
   
   const user=JSON.parse(localStorage.getItem("user"));
   const token=localStorage.getItem("jwt");
   const [loading,setLoading]=useState(false);
  
 
    useEffect(()=>{
       setLoading(true);
        getOxygenById(oxygenid,user._id,token).then(data=>{
          
            setDeatils(data);
            console.log(details);
            if(details){

            setLoading(false);
            toast("Fetched Successfully");
            }
           
        }).catch(err=>{

          setLoading(false);
          toast.error("Couldn't fetch try a refersh");
          
        })
        // eslint-disable-next-line
    },[])



          
      
      
    return (
      <div>
       <Base>
       <ToastContainer/>
       <h1 className="heading text-center"><span className="spanner ">The</span> Details <span className="spanner"></span></h1>

{loading?(

<div className="loader">Loading...</div>
):
<div class="container text-warning  d-flex justify-content-center shadow-lg text-center mb-2  border border-secondary  background" style={{height:"auto"}}>
  <div class="row">
   
    
  
<img src={`/${details?.photo}`} class="img-fluid p-4 rounded " alt={details?.ngoname}/>
     
      
      
      <div class="table-responsive bg-white  mb-3 p-3 ">
        <table class="table table-sm  ">
          <tbody>
          <tr>
              <th class="pl-0 w-25" scope="row"><strong>Name</strong></th>
            
              <td>{details?.ngoname}</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Location</strong></th>
            
              <td>{details?.location}</td>
            </tr>
          
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Contact_no</strong></th>
              <td>{details?.contact_no} </td>
            </tr>
            
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Location</strong></th>
              <td>{details?.location}</td>
            </tr>
           
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Quantity</strong></th>
              <td>{details?.quantityofCyclinder}</td>
            </tr>
            
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Pincode</strong></th>
              <td>{details?.pincode}</td>
            </tr>
            
            
           
          </tbody>
        </table>
        
        
      </div>
    
     
    
    
    </div>
  </div>
}
   </Base>  


</div>

    )
}

export default EventsDetail
