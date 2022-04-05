import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import {  getMedicineById } from '../apicalls/auth/eventcalls';
import Base from '../basic/Base';
import './Events.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../basic/button.css';



function MedicineDetail() {                                             
   const {medicineid} =useParams();
  
   const [details,setDeatils]=useState({})
  
   const user=JSON.parse(localStorage.getItem("user"));
   const token=localStorage.getItem("jwt");
   const [loading,setLoading]=useState(false);



 
 
    useEffect(()=>{
       setLoading(true);
        getMedicineById(medicineid,user._id,token).then(data=>{
          
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
              <th class="pl-0 w-25" scope="row"><strong>Medicine Name</strong></th>
              <td>{details?.medicinename}</td>
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

export default MedicineDetail
