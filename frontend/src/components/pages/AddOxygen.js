import React, { useState, useEffect } from 'react'

import Base from '../basic/Base'


import {  useHistory } from 'react-router-dom';

import { createOxygen,  } from '../apicalls/auth/eventcalls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Resources from '../basic/Resources';



const AddOxygen = () => {
 const history= useHistory();
const token=localStorage.getItem("jwt");
const user=JSON.parse(localStorage.getItem("user"))

  const [values, setValues] = useState({
    
    ngoname: "",
    pincode: "",
    location: "",
    quantityofCyclinder:"",
    contact_no:"",
    photo: "",
  formData: ""
  

  });

  const {
    ngoname,

    pincode,
    location,
    quantityofCyclinder,
    contact_no,
   
    formData
  } = values;

  const preload = () => {
   
      
      setValues({ ...values, formData: new FormData() });
  
        
      
    
  };

  useEffect(() => {
    preload();
    // eslint-disable-next-line
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createOxygen( formData,user._id, token).then(data => {
     if(data){
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        if(data.message){
          toast(data.message)
        }
        setTimeout(() => {
          history.push('/')
      }, 2000);
        setValues({
          ...values,
          ngoname: "",
          pincode: "",
          location: "",
          quantityofCyclinder:"",
          contact_no:"",
          photo: "",
        
        });
      }
    }
    });
  };

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
   
    setValues({ ...values, [name]: value });
  };



  const createProductForm = () => (
    <div class="container px-4 py-5 mx-auto">
    <div class="card card0">
        <div class="d-flex flex-lg-row flex-column-reverse">
            <div class="card card1">
                <div class="row justify-content-center my-auto">
                    <div class="col-md-8 col-10 my-5">
                        <div class="row justify-content-center px-3 mb-3">
                           <img id="logo" src="https://toppng.com/uploads/preview/oxygen-tank-png-illustratio-11563238389pk5zhz5xsx.png" height="100px" width="100px" alt="Medicine"/> </div>
                        <h3 class="mb-5 text-center heading">Contribute Oxygen to the Society</h3>
                     
                        <form >
                        <div className="form-group">

                        <label class="form-control-label text-muted">NGO name</label>                              
  
    <input
    type="text"
      name="firstname"
      className="form-control"
      placeholder="Enter your NGO Name or Your Name"
      onChange={handleChange("ngoname")}
      value={ngoname}
   
    />
  </div>
  <div className="form-group">
  <label class="form-control-label text-muted">Quantity of Cylinders</label> 
    <input
    type="text"
      name="quantityofCyclinder"
      className="form-control"
      placeholder="Quantity of Cylinders"
      onChange={handleChange("quantityofCyclinder")}
      value={quantityofCyclinder}
   
    />
  <div className="form-group">

<label class="form-control-label text-muted">Pincode</label>                              
<input type="text" placeholder="Enter Pincode"  className="form-control" required pattern="^[0-9]{6}$" title="Enter Valid Pin Code"   onChange={handleChange("pincode")}
      value={pincode}/> 

  
</div>


<div className="form-group">
<label class="form-control-label text-muted">Location</label> 
    <input
    type="text"
      name="location"
      className="form-control"
      placeholder="Location"
      onChange={handleChange("location")}
      value={location}
   
    />
  </div>

  <div className="form-group">
  <label class="form-control-label text-muted">Contact no</label> 
    <input
    type="text"
      name="contact_no"
      className="form-control"
      placeholder="Contact no"
      onChange={handleChange("contact_no")}
      value={contact_no}
   
    />
  </div>
  
  </div>
 

                    
                       
                        <div class="row justify-content-center my-3 px-3"> <button class="btn-block btn-color" onClick={onSubmit}>Add Oxygen data</button> </div>
             
                    </form>
                    </div>  
                </div>
              
              
            </div>
            <div class="card card2">
                <div class="my-auto mx-md-5 px-md-5 right">
                    <h3 class="text-white">Thanks for your contribution</h3>
                     <small class="text-white">
                       In this corona pandemic we need a lot a support from your side your one contribution can save a life!!
                      </small>
                </div>
            </div>
        </div>
    </div>
</div>
  );

  return (
    <>
    <Base>
    <Resources/>
<ToastContainer/>
       
        {createProductForm()}
  
 
    </Base>
  </>
  );
};

export default AddOxygen;
