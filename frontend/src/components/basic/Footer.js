import React from 'react'

import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div>
           <section id="footer" className="section1">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
				
          <img  src={"/assets/img/logo.jpeg"} style={{height:"auto",maxWidth:"250px",width:"100%",marginBottom:"10px"}} alt="logo"/>
          <p className="text-white">Compuwave society aims to transform its members into perspicacious & innovative individuals besides improving their logical skills.</p>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Quick links</h5>
					<ul class="list-unstyled quick-links">
						<li><a href="/"><Link to="/" ><i class="fa fa-angle-double-right"></i>Home</Link></a></li>
						<li><a href="/"><Link to="/about-us" ><i class="fa fa-angle-double-right"></i>About Us</Link></a></li>
						<li><a href="/"><Link to="/events" ><i class="fa fa-angle-double-right"></i>Events</Link></a></li>
						<li><a href="/"><Link to="/profile" ><i class="fa fa-angle-double-right"></i>Profile</Link></a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Contact Us</h5>
					<ul class="list-unstyled quick-links text-white">
          <li class="list-inline-item">
            compuwave@sbsstc.ac.in
            </li>
            <br/>
            <li class="list-inline-item">
            SBSSTC, Moga Road,
            
            </li>
            <br/>
            <li class="list-inline-item">
            
Ferozepur, Punjab 152004
            </li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank" rel="noreferrer"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
        
				<hr/>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					
					<p class="h6">© All right Reversed.<a class="text-green ml-2" href="https://www.sunlimetech.com" target="_blank" rel="noreferrer">Compuwave</a></p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>

        </div>
    )
}

export default Footer
