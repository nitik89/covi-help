import React, { useEffect, useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

import '../basic/Loading.css';


import '../basic/Cards.css';
import './Events.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../basic/button.css';


import Res from '../basic/Res';
import { bookMedicine, getAllMedicines } from '../apicalls/auth/eventcalls';
import Base from '../basic/Base';
function Medicines() {
const [events,setEvents]=useState([]);
const {state,dispatch}=useContext(UserContext);
console.log(events);
const user=JSON.parse(localStorage.getItem("user"));
const token=localStorage.getItem("jwt");
const [loading,setLoading]=useState(true);
let error=0;

const bookNow=(oxygenId)=>{
   
    if(state?.medicine){
        error=1;
        toast.error("Only one booking allowed")
    }
    if(error===0){
    bookMedicine(oxygenId,user._id,token).then(res=>{
        if(res){
            if(res.message){
                toast(res.message);
                localStorage.setItem("user",JSON.stringify(res.user));
      
        dispatch({type:'USER',payload:res.user});
            }
            if(res.error){
                toast.error(res.error);
            }
        }
        
    }).catch(err=>{
        console.log(err);
    })
}
}

const getEvents=()=>{
    getAllMedicines(user._id,token).then(res=>{
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
 <h1 className="font-weight-bold heading text-center"><span className="spanner">MEDICINES DATA</span></h1>
{loading? <div className="loader">Loading...</div>:(
    
    <div className="container">
       
    <div className="row m-4 pt-3">
        {events?.map(evnts=>{
            return (
             <div className="col-sm-12 col-md-6 col-xl-4 p-4">
             <div class="login-card-purple p-3 shadow-lg rounded border " >
<div class="card-header" >
<img src={`/${evnts?.photo}`} class="card-img-top" height="200rem" width="auto" alt={evnts.name}/>
<h6 className=" font-weight-bold mt-4">

    <span clasName="subheading mr-2"style={{fontSize:"20px",color:"white"}}> NGO's Name: </span>
     <span className="text-warning "> {evnts.ngoname} </span></h6>
</div>

<ul class="list-group shadow-lg ">

  

  

  <li class="list-group-item list-group-item-warning grp"  style={{backgroundImage:"linear-gradient(#16222A,#3A6073)",color:"white"}}>

           <>   
           {evnts?.active?(
               <>
                     <><Link to={`medicines/${evnts._id}`} className="text-white">
           <btn className="btn btn-info firstbutton p-2">Details</btn> </Link>
           <btn className="btn btn-info firstbutton p-2" onClick={()=>{bookNow(evnts._id)}}>Book Now</btn>
           <p className="p-2" style={{fontSize:"20px"}}>Verified <i class="fas fa-check" style={{color:"green",fontSize:"30px"}}  ></i></p>
           </> 
                   </>
           ):(<p className="p-2" style={{fontSize:"30px"}}>Not verified <i class="fas fa-close"  style={{color:"red",fontSize:"30px"}}></i></p>)}
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

export default Medicines
