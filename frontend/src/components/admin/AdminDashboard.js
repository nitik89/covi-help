import React, { useContext,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App'
import Base from '../basic/Base';
import './Admin.css';

function AdminDashboard() {
    const {state}=useContext(UserContext);
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
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

            <div class="card-header bg-dark text-white ">
              Admin Info
            </div>
            <ul class="list-group list-group-flush text-secondary">
              <li class="list-group-item ">Name- <span className="spanner"> {state?.firstname} {state?.lastname} </span> </li>
              <li class="list-group-item ">Email: <span className="badge spanner badge-success mr-3"> {state?.email} </span> </li>
              <li class="list-group-item"><span className="spanner"> ADMIN AREA </span> </li>
              
            </ul>
          </div>
        )

    }
    return (
        <Base>

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

export default AdminDashboard
