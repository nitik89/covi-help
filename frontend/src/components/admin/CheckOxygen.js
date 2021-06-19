import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

import {getAllOxygen, deleteOxygen, changeOxygen } from '../apicalls/auth/eventcalls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Base from '../basic/Base'

function CheckFood() {

    const [managers,setManagers]=useState([]);
    const user=JSON.parse(localStorage.getItem("user"));
    const token=localStorage.getItem("jwt");

    const  getManagers=()=>{
        getAllOxygen(user._id,token).then(user=>{
            if(user){
                console.log(user);
                setManagers(user);
               
            }
        })
    }
    useEffect(() => {
        
       getManagers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const changeStatus=(Eventid)=>{
        changeOxygen(Eventid,user._id,token).then(data=>{
if(data){
    if(data.message){
        const idx=managers.findIndex(evnts=>evnts._id===Eventid);
        const what=managers[idx].active;
        managers[idx].active=!what;
        const newmanagers=[...managers];
        setManagers(newmanagers);
    }
}
        }).catch(err=>{
            console.log(err);
        })
    }
    const deleteEvent=(id)=>{
        deleteOxygen(id,user._id,token).then(res=>{
            if(res.message==="Deleted Successfully!"){

            const newmng=managers?.filter(mng=>{
                return mng._id!==id
            })
            setManagers(newmng);
            
            toast(res.message);
        }
        else{
            toast.error(res.error)

        }
        })

    }
    const adminLeftSide=()=>{
        return (
            <div class="card text-white  mb-3 offset-1" >
            <div class="card-header bg-success">Choose Any Option</div>
            <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item list-group-item-light"><Link to="/admin/checkOxygen" className="nav-link text-success"> Check Oxygen</Link></li>
            <li class="list-group-item list-group-item-light"><Link to="/admin/checkFood" className="nav-link text-success"> Check Food</Link></li>
            <li class="list-group-item list-group-item-light"><Link to="/admin/checkMedicines" className="nav-link text-success"> Check Medicines</Link></li>
            
            </ul>
             
            
            </div>
          </div>
        )
    }
    const adminRight=()=>{
        return(
            <div class="card offset-1"  >
                <ToastContainer/>
            <div class="card-header bg-dark text-white ">
            Oxygen Details
            </div>
            {managers?.map((evnts,idx)=>{
                return(
                   
                    <ul class="list-group list-group-flush m-3">
                        
                    <li class="list-group-item">{idx+1}: NGO NAME: <span className="badge badge-warning mr-3"> {evnts?.ngoname} </span> </li>
                    <li class="list-group-item">Location:<span className="badge badge-success mr-3">{evnts?.location} </span> </li>
                    <li class="list-group-item"> Quantity of Cylinder(Estimate) <span className="badge badge-danger mr-3"> {evnts?.quantityofCyclinder}  </span> </li>
                    <li class="list-group-item"> Pincode: <span className="badge badge-danger mr-3"> {evnts?.pincode}  </span> </li>
                    <li class="list-group-item"> Status: <span className="badge badge-danger mr-3"> {evnts?.active?<p>true</p>:<p>false</p>}</span> </li>
        
                    <li class="list-group-item "> <button type="button" class="btn btn-danger" onClick={()=>{deleteEvent(evnts?._id)}}>Delete</button> </li>
                    <li class="list-group-item "> <button type="button" class="btn btn-warning" onClick={()=>{changeStatus(evnts?._id)}}>Change Status</button> </li>
                  </ul>

                )
            })}
          
          </div>
        )

    }
    return (
        <Base title="Welcome to the admin dashboard">
            <div class="container bg-info">
                <div className="row p-4 ">
                <div class="col-sm-12 col-lg-4">
                {adminLeftSide()}   
                    </div>
                    <div class="col-sm-12 col-lg-8">
                {adminRight()}   
                    </div>
                    </div>
            </div>
        
        </Base>
    )
}

export default CheckFood
