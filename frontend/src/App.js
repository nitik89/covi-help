import React, { useReducer,createContext, useContext,useEffect } from 'react'
import {BrowserRouter,Switch,Route,useHistory} from 'react-router-dom';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';

import './App.css';
import {initialState, reducer} from './components/reducers/useReducers';
import Login from './components/pages/Login';
import Events from './components/pages/Events';
import AdminRoute from './helper/AdminRoutes';


import AdminDashboard from './components/admin/AdminDashboard';

import CreateEvents from './components/admin/CreateEvent';
import ManageEvents from './components/admin/ManageEvents';

import EventsDetail from './components/pages/EventsDetail';


import AdminManageStudents from './components/admin/AdminManageStudents';

import Profile from './components/pages/Profile';
import AboutUs from './components/pages/AboutUs';
import AddOxygen from './components/pages/AddOxygen';
import Covidcases from './components/pages/Covidcases';
import AddMedicines from './components/pages/AddMedicines';
import AddFood from './components/pages/AddFood';
import CheckFood from './components/admin/CheckFood';
import CheckOxygen from './components/admin/CheckOxygen';
import CheckMedicines from './components/admin/CheckMedicines';
import Food from './components/pages/Food';
import Medicines from './components/pages/Medicines';
import Donation from './components/pages/Donation';
import MedicineDetail from './components/pages/MedicineDetail';
import FoodDetail from './components/pages/FoodDetails';
import Contributions from './components/pages/Contributions';



export const UserContext=createContext();

const Routes=()=>{
 const {dispatch}=useContext(UserContext);
 
 const history=useHistory();
useEffect(() => {
    window.scrollTo(0,0);
    const user=JSON.parse(localStorage.getItem("user"));

    if(user){
        
        dispatch({type:'USER',payload:user});
        
        const localcart=JSON.parse(localStorage.getItem("cart"));
        if(localcart){
            dispatch({type:'ADDTOCART',payload:localcart}); 
        }
    }
        
       
     else{
      
        history.push('/login')
      }
}, [dispatch,history])
    return(
        <Switch>
    <Route exact path="/">
    <Home/>
  </Route>
    <Route path="/signup" exact component={Signup}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/resources/oxygen" exact component={Events}/>
  
    <Route path="/resources/oxygen/:oxygenid" exact component={EventsDetail}/>
    <Route path="/about-us" exact component={AboutUs}/>
    <Route path="/profile" exact component={Profile}/>
    <Route path="/resources/food" exact component={Food}/>
    <Route path="/resources/food/:foodid" exact component={FoodDetail}/>
    <Route path="/resources/medicines" exact component={Medicines}/>   
    <Route path="/resources/medicines/:medicineid" exact component={MedicineDetail}/>   
    <Route path="/add-oxygen" exact component={AddOxygen}/>
    <Route path="/donation" exact component={Donation}/>
    <Route path="/add-medicines" exact component={AddMedicines}/>
    <Route path="/add-food" exact component={AddFood}/>
    <Route path="/covid-cases" exact component={Covidcases}/>
    <Route path="/contributions" exact component={Contributions}/>
    <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
    <AdminRoute path="/admin/checkFood" exact component={CheckFood}/>
    <AdminRoute path="/admin/checkOxygen" exact component={CheckOxygen}/>
    <AdminRoute path="/admin/checkMedicines" exact component={CheckMedicines}/>
    <AdminRoute path="/admin/events/create" exact component={CreateEvents}/>
    <AdminRoute path="/admin/students/event" exact component={AdminManageStudents}/>
    
    <AdminRoute path="/admin/events/manage" exact component={ManageEvents}/>


    
    </Switch>
    )
}
function App() {
 
    const [state,dispatch]=useReducer(reducer,initialState);
    
  
    return (
        <UserContext.Provider value={{state,dispatch }}>
        <BrowserRouter>
       
           <Routes/>
       
        </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App;
