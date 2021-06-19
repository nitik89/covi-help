import React, { useContext } from 'react'
import { Link,withRouter } from 'react-router-dom'
import { UserContext } from '../../App';
import { signout } from '../../helper/authhelper';
import './Menu.css';

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#fcce00" };
    } else {
      return { color: "#DAE0E2" };
    }
  };


function Menu({history,path}) {
  
  const {state,dispatch}=useContext(UserContext); 
  
  const logout=()=>{
    signout().then(res=>{
      dispatch({type:'CLEAR'});
      history.push('/login');
 
    })
  }


    
    return (
      
    <div>

      <nav className="navbar navbar-expand-md navbar-dark" style={{background:" linear-gradient(to right bottom,#08859b ,#50a9ac)",maxWidth:"100%",padding:"10px"}}>
      <Link  to="/">
<a class="navbar-brand" href="/">
            COVI-HELP
        </a>
       
      
</Link>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="collapsibleNavbar">
  <ul className="navbar-nav ml-auto">

   

    {state?._id?(
      <>
      
      <li className="nav-item">
      <Link className="nav-link"style={currentTab(history, "/resources")} to="/resources/oxygen">Resources</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link"style={currentTab(history, "/covid-cases")} to="/covid-cases">Covid Cases</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link"style={currentTab(history, "/donation")} to="/donation">Donation</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link"style={currentTab(history, "/profile")} to="/profile">Profile</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link"style={currentTab(history, "/add-medicines")} to="/add-medicines">Add Resources</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link"style={currentTab(history, "/contributions")} to="/contributions">My Contributions</Link>
    </li>
    {state?.role===1?
    <>
    <li className="nav-item">
    <Link className="nav-link" style={currentTab(history, "/admin/dashboard")} to="/admin/dashboard" >Admin Dashboard</Link>
  </li>
  
  </>:<></>
    }
    <li className="nav-item">
    <button type="button" class="btn btn-danger"  style={{backgroundImage:"linear-gradient(#16222A,#3A6073)",border:"none"}} onClick={()=>{logout()}}> Logout </button>
    </li> 
   
      
    
</>
    ):(
      <>
      <li className="nav-item">
      <Link className="nav-link"style={currentTab(history, "/signup")} to="/signup"> Signup</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link"style={currentTab(history, "/login")} to="/login"> Login</Link>
    </li>
</>
    )}
    
  </ul>
</div>  
</nav>
    </div>
          
        
    )
}

export default withRouter(Menu)
