import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { signin } from '../apicalls/auth/authcalls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Base from '../basic/Base';
import './Login.css';
import { Link } from 'react-router-dom';

function Login({history}) {
  
  const {dispatch}=useContext(UserContext);

  const[values,setValues]=useState({email:"",password:""})
  const {email,password}=values;

  const handleChange=event=>{
    
     setValues({...values,[event.target.name]:event.target.value})
   }
   const authenticate=(res)=>{
    if(res.token){
      toast("Signed in Success");
        localStorage.setItem("jwt",res.token);
        localStorage.setItem("user",JSON.stringify(res.user));
      
        dispatch({type:'USER',payload:res.user});

   }
  }
   const redirect=(res)=>{
     
    if(res.user.role===1){
     
      setTimeout(()=>{
        history.push("/admin/dashboard");
      },2000);
    }
    
    
      if(res.user.role===0){
        setTimeout(()=>{
          history.push("/");
        },2000);
      }

   }
   const loadTheCart=()=>{
    const localcart=JSON.parse(localStorage.getItem("cart"));
    if(localcart){
        dispatch({type:'ADDTOCART',payload:localcart}); 
    }

   }
   const onSubmit=event=>{
    event.preventDefault();
    signin({email,password})
    .then(res=>{
      
      if(res.token){
     authenticate(res);
     loadTheCart();
     redirect(res);
      }
        
      if(res.error){
        toast.error(res.error);
      }
        
      
     

     else{
       if(res.error){
         toast.error(res.error);
       }
     }
      
     
    
    }).catch(err=>{
      console.log(err);
    })
  }
    
    const createForm = () => (
      <div class="container px-4 py-5 mx-auto">
      <div class="card card0">
          <div class="d-flex flex-lg-row flex-column-reverse">
              <div class="card card1">
                  <div class="row justify-content-center my-auto">
                      <div class="col-md-8 col-10 my-5">
                          <div class="row justify-content-center px-3 mb-3"></div>
                          <h3 class="mb-5 text-center heading">Welcome to COVI-HELP</h3>
                          <h6 class="msg-info">Please login to your account</h6>
                          <form  >

                        


                          <div class="form-group">
                            
                             <label class="form-control-label text-muted">Email</label> 
        <input  type="email"name="email"className="form-control"placeholder="Email"onChange={(event)=>{handleChange(event)}}/> </div>
                          <div class="form-group"> <label class="form-control-label text-muted">Password</label> 
        <input  type="password"name="password" onChange={(event)=>{handleChange(event)}}
        className="form-control"
        placeholder="Password"/> 
        </div>
                          <div class="row justify-content-center my-3 px-3"> <button class="btn-block btn-color" onClick={onSubmit}>Login</button> </div>
               
                      </form>
                      </div>  
                  </div>
                
                  <div class="bottom text-center mb-5">

                      <p href="#" class="sm-text mx-auto mb-3">Don't have an account?
                      <Link to="/signup"> 
                      <button class="btn btn-white ml-2">Create new</button>
                      </Link>
                      </p>
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
      );
    return (
        <div >
        <Base title="Login Here" >
        <ToastContainer/>
        {createForm()}
        </Base>
        </div>
    )
}

export default Login
