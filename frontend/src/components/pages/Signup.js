import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../apicalls/auth/authcalls';
import Base from '../basic/Base'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StudentSignup() {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        rollno: "",
        email: "",
        password: "",
        year: "",
        pincode: ""


    });
    const history = useHistory();
    const { firstname, lastname, rollno, email, password, year, contact_no, pincode } = values;

    const handleChange = event => {

        setValues({...values, [event.target.name]: event.target.value })
    }
    const onSubmit = event => {
        event.preventDefault();

        signup({ firstname, lastname, rollno, email, password, year, contact_no, pincode })
            .then(res => {

                if (res) {
                    console.log(res);

                    if (res.message) {

                        toast("Signup successful Redirecting to login page!");
                        setTimeout(() => {
                            history.push('/login')
                        }, 2000);

                    }

                    if (res.error) {
                        toast.error(res.error);
                    }
                } else {
                    toast.error("Not able to fetch!")
                }

            }).catch(err => {
                console.log("error")
            })


    }

    const createForm = () => ( < div class = "container px-4 py-5 mx-auto" >
        <div class = "card card0">
        <div class = "d-flex flex-lg-row flex-column-reverse">
        <div class = "card card1" >
        <div class = "row justify-content-center my-auto" >
        <div class = "col-md-8 col-10 my-5" >
        <div class = "row justify-content-center px-3 mb-3" >
        </div>

        <h3 class = "mb-5 text-center heading" > Welcome to COVIHELP  </h3><h6 class = "msg-info" > Signup For Account 
        </h6 > 
        <form>
        <div className = "form-group" >

        <label class = "form-control-label text-muted" > Firstname </label>                           

        <input type = "text"
        name = "firstname"
        className = "form-control"
        placeholder = "Enter your Firstname"
        onChange = {
            (event) => { handleChange(event) }
        }
        value = { firstname }

        /> </div > <div className = "form-group" >

        <label class = "form-control-label text-muted" > Lastname </label>                       


        <input type = "text"
        name = "lastname"
        className = "form-control"
        placeholder = "Enter your Lastname"
        onChange = {
            (event) => { handleChange(event) }
        }
        value = { lastname }


        /> </div > <div className = "form-group" >

        <label class = "form-control-label text-muted" > Firstname </label>                             


        <input type = "text"
        name = "pincode"
        className = "form-control"
        placeholder = "Enter your Pincode"
        onChange = {
            (event) => { handleChange(event) }
        }
        value = { pincode }

        /> </div >





        <div className = "form-group" >
        <label class = "form-control-label text-muted" > Contact no </label> 
        <input type = "text"
        name = "contact_no"
        className = "form-control"
        placeholder = "Contact no"
        onChange = {
            (event) => { handleChange(event) }
        }
        value = { contact_no }

        /> </div >

        <div className = "form-group" >
        <label class = "form-control-label text-muted" > Email </label> 
        <input type = "email"
        name = "email"
        className = "form-control"
        placeholder = "Email"
        onChange = {
            (event) => { handleChange(event) }
        }
        /> </div >
        <div class = "form-group" > < label class = "form-control-label text-muted" > Password </label>  
        <input type = "password"
        name = "password"
        onChange = {
            (event) => { handleChange(event) }
        }
        className = "form-control"
        placeholder = "Password" /> </div> <div class = "row justify-content-center my-3 px-3" > < button class = "btn-block btn-color"
        onClick = { onSubmit } > Signup </button> </div >

        </form> </div > </div>

        <div class = "bottom text-center mb-5" >

        <p href = "#"
        class = "sm-text mx-auto mb-3" > Already have an account ?
        <Link to = "/login" >
        <button class = "btn btn-white ml-2" > Login Here </button> </Link> </p> </div > </div> <div class = "card card2" > 
        <div class = "my-auto mx-md-5 px-md-5 right" >
        <h3 class = "text-white" > Our MOTIVE IS HELP!! </h3><small class="text-white">COVI HELP is a small organization formed which has the main motive to help people to get the resources during the pandemic</small >
        </div> </div > </div> </div > </div>
    );
    return ( <div>
        <Base title = "Student Signup Here" >
        <ToastContainer /> { createForm() } </Base>  </div>
    )
}

export default StudentSignup