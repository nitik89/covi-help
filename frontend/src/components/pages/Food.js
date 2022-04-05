import React, { useEffect, useState } from 'react'



import '../basic/Loading.css';


import '../basic/Cards.css';
import './Events.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../basic/button.css';


import Res from '../basic/Res';
import { getAllFood } from '../apicalls/auth/eventcalls';
import Base from '../basic/Base';
function Food() {
const [events,setEvents]=useState([]);


const user=JSON.parse(localStorage.getItem("user"));
const token=localStorage.getItem("jwt");
const [loading,setLoading]=useState(true);




const getEvents=()=>{
    getAllFood(user._id,token).then(res=>{
        setLoading(false);
        console.log(res);
        toast("Fetched Successfully");
        setEvents(res);
    }).catch(err=>{

        setLoading(false);
        toast.error("Couldn't load")
    })
}

useEffect(()=>{
   
    getEvents();
    
   // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

    return (
        <>
        <Base>
        <Res/>
        <ToastContainer/>
        <div>
 <h1 className="font-weight-bold heading text-center"><span className="spanner">FOOD DATA</span></h1>
{loading? <div className="loader">Loading...</div>:(
    
    <div className="container">
       
    <div className="row m-4 pt-3">
        {events?.map(evnts=>{
            return (
             <div className="col-sm-12 col-md-6 col-xl-4 p-4">
             <div class="login-card-purple p-3 shadow-lg rounded border " >
<div class="card-header" >

<h6 className=" font-weight-bold mt-4">

    <span clasName="subheading mr-2"style={{fontSize:"20px",color:"white"}}> NGO's Name: </span>
     <span className="text-warning "> {evnts.ngoname} </span></h6>
</div>

<ul class="list-group shadow-lg ">

  

  

         <li class="list-group-item list-group-item-warning grp" style={{backgroundImage:"linear-gradient(#16222A,#3A6073)",color:"white"}} >

           <>   
           {evnts?.active?(
               <>
                     <>
           <p className="p-2" style={{fontSize:"20px"}}>Verified </p>
           </> 
                   </>
           ):(<p className="p-2" style={{fontSize:"30px"}}>Not verified </p>)}
          </>
        </li>
           
</ul>
</div>
             </div>


            )
        })}
       
    </div>
</div>

)}
</div>
        </Base>
     
        </>
    )
}

export default Food
