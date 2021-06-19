import React, { useEffect, useState } from 'react'
import { getMyOxygen } from '../apicalls/auth/eventcalls';
import Base from '../basic/Base'

function Contributions() {
    const [data,setData]=useState([]);
    const token=localStorage.getItem("jwt");
    console.log(data);

  
    const user=JSON.parse(localStorage.getItem("user"));
    useEffect(()=>{
        getMyOxygen(user._id,token).then(res=>{
            setData(res);
        })
        // eslint-disable-next-line
    },[])
   
    return (
        <div>
            <Base>
            <div className="container">
            <div className="row">
            <div className="col-sm-6">
                <h1 className="text-center spanner">Oxygen</h1>
            {data?.map(user=>{
                return(
                    user.enrolledUsers.map((us,idx)=>{
                        return(
                            <>
                            <ul class="list-group">
  <li class="list-group-item">{idx+1}:  Name- {us.firstname} {us.lastname}</li>
  <li class="list-group-item">Email- {us.email}</li>
  <li class="list-group-item">Contact_no- {us.contact_no}</li>
</ul>
</>
                         
                        )
                    })
                )
         
            })}
            </div>
          
            <div className="col-sm-6">
                <h1  className="text-center spanner">Medicines</h1>
            {data?.map(user=>{
                return(
                    user.enrolledUsers.map((us,idx)=>{
                        return(
                            <>
                            <ul class="list-group">
  <li class="list-group-item">{idx+1}:  Name- {us.firstname} {us.lastname}</li>
  <li class="list-group-item">Email- {us.email}</li>
  <li class="list-group-item">Contact_no- {us.contact_no}</li>
</ul>
</>
                        )
                    })
                )
         
            })}
            </div>
            </div>
            </div>
        
            </Base>

        </div>
    )
}

export default Contributions
