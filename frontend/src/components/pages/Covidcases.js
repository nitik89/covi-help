import React, { useEffect, useState } from 'react'
import Base from '../basic/Base'
import './covid.css';
function Covidcases() {
    const [data,setData]=useState([])
    const getCoviddata=async ()=>{
        fetch("https://api.covid19india.org/data.json").then(res=>{
            return res.json();
        }).then(res=>{
            
            setData(res.statewise[0]);
            console.log(data);
        })
    }
    useEffect(() => {
        getCoviddata();
        // eslint-disable-next-line
    }, [])
    return (
        <div className="covid">
        <Base>
        
       <h1 className="my"> <svg height="100" width="100" class="blinking">
  <circle cx="50" cy="50" r="10" fill="red" />
  Sorry, your browser does not support inline SVG.  
</svg>Live Covid Cases Tracker</h1> 
<div class="container">
    <div class="row">
        <div class="col-md-4 col-xl-3">
            <div class="card-1 bg-c-blue order-card">
                <div class="card-block">
                    <h1 class="m-b-20 my">Active</h1>
                    <h2 class="text-right other"><span>{data.active}</span></h2>
                    
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card-1 bg-c-green order-card">
                <div class="card-block">
                    <h1 class="m-b-20 my">Confirmed </h1>
                    <h2 class="text-right other"><span>{data.confirmed}</span></h2>
                   
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card-1 bg-c-yellow order-card">
                <div class="card-block">
                    <h1 class="m-b-20 my">Deaths</h1>
                    <h2 class="text-right other"><span>{data.deaths}</span></h2>
                   
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card-1 bg-c-pink order-card">
                <div class="card-block">
                    <h1 class="m-b-20 my">Recovered</h1>
                    <h2 class="text-right other"><span>{data.recovered}</span></h2>
                    
                </div>
            </div>
        </div>
	</div>
</div>

        </Base>
        </div>
    )
}

export default Covidcases
