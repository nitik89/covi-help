import React, { useEffect} from 'react'
import Base from '../basic/Base'


function Home() {

    useEffect(()=>{
      window.scrollTo(0, 0)
  },[])
    return (
        <div>
         <Base>
       
  




  <section id="hero">
    <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">

  
        <div class="carousel-item active" style={{backgroundImage:'url(assets/img/virus-4937553_1920.jpg)',backgroundSize:"cover"}}>
          <div class="container" style={{backgroundColor:""}}>
            <h2 style={{color:"white"}}>Welcome to <span style={{color:"white"}}>Covi-Help</span></h2>
            <p style={{color:"white",fontWeight:"700"}}>Our main motto is to help the needy during this pandemic who are suffering from the requirements of essential things</p>
     
          </div>
        </div>

      
        <div class="carousel-item" style={{backgroundImage:'url(assets/img/protective-suit-5716753_1920.jpg)',backgroundSize:"cover"}}>
          <div class="container" style={{color:"white"}}>
            <h2>Our Doctors</h2>
            <p style={{fontWeight:"700"}}>We must give a tribute to our doctors who have been working very hard since the lockdown has started and it has been a long time since covid 19.</p>
           
          </div>
        </div>

        <div class="carousel-item" style={{backgroundImage:'url(assets/img/man-6274651_1920.jpg)',backgroundSize:"cover"}}>
          <div class="container">
            <h2 style={{color:"white"}}>We will help you</h2>
            <p style={{color:"white",fontWeight:"700"}}>It is our duty to help you to get the resources which you need in order to save ur well beings like oxygen,medicines etc.</p>
           
          </div>
        </div>

      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>
  </section>

  <main id="main">

    
    <section id="featured-services" class="featured-services">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="fas fa-people-arrows"></i></div>
              <h4 class="title"><a href="/">Social Distance</a></h4>
              <p class="description">Maintain a social distance of 6 feet with other person</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="fas fa-head-side-mask"></i></div>
              <h4 class="title"><a href="/">Wear Mask</a></h4>
              <p class="description">Mask is important to avoid protection against the germs.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="fas fa-house-user"></i></div>
              <h4 class="title"><a href="/">Stay Home</a></h4>
              <p class="description">Stay home until is very important to go out</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><i class="fas fa-hands-wash"></i></div>
              <h4 class="title"><a href="/">Wash your hands</a></h4>
              <p class="description">Wash your hands with soap at regular intervals</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    
  

    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>About Us</h2>
          <p>The Covi-Help's main motive is to help people in this pandemic times and the main motive is to get the resources on time which can be utilized on time.</p>
        </div>

        <div class="row">
          <div class="col-lg-6" data-aos="fade-right">
            <img src="assets/img/covid-19-4960254_1920.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Our motto is to help.</h3>
            <p class="font-italic">
              We will provide these resources
            </p>
            <ul>
              <li><i class="icofont-check-circled"></i> We will provide the oxygen.</li>
              <li><i class="icofont-check-circled"></i>We will provide the food </li>
              <li><i class="icofont-check-circled"></i>We will provide the medicines</li>
            </ul>
          
          </div>
        </div>

      </div>
    </section>

    
   
    
    <section id="doctors" class="doctors section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Our Frontline Workers</h2>
          <p>Our frontline workers are working really hard to make things normal </p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="100">
              <div class="member-img">
                <img src="assets/img/135860-tqrytgycjj-1586955494.jpg" class="img-fluid" alt=""/>
                
              </div>
              <div class="member-info">
                <h4>Our Doctors</h4>
                <span>They have saved lives of millions</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="200">
              <div class="member-img">
                <img src="assets/img/_112250983_217747a3-01d7-466c-8c0d-45c2f35d2195.jpg" class="img-fluid" alt=""/>
                
              </div>
              <div class="member-info">
                <h4>Our Police Force</h4>
                <span>The police force has worked 24x7</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="300">
              <div class="member-img">
                <img src="assets/img/2020-03-27T101400Z_211242614_RC2ASF9TIMPG_RTRMADP_3_HEALTH-CORONAVIRUS-SOUTHASIA_1585631419369_1585631421077.webp" class="img-fluid" alt=""/>
             
              </div>
              <div class="member-info">
                <h4>The NGO's</h4>
                <span>The NGO's have served food to many people</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src="assets/img/659-municipal-workers-spray-disinfectants-on-people-during-the-nationwide-image-88005500_20200427_017.webp" class="img-fluid" alt=""/>
               
              </div>
              <div class="member-info">
                <h4>The Municipal Workers</h4>
                <span>They have helped in santizing the environment</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="gallery" class="gallery">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Gallery</h2>
          
        </div>

        <div class="owl-carousel gallery-carousel" data-aos="fade-up" data-aos-delay="100">
          <a href="assets/img/20210509130L.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/20210509130L.jpg" alt=""/></a>
          <a href="assets/img/covd.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/covd.jpg" alt=""/></a>
          <a href="assets/img/1066137-covid.png" class="venobox" data-gall="gallery-carousel"><img src="assets/img/1066137-covid.png" alt=""/></a>
          <a href="assets/img/hand_sanitizers_660_220320075839_250420024356.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/hand_sanitizers_660_220320075839_250420024356.jpg" alt=""/></a>
          <a href="assets/img/coronavirus-vaccine.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/coronavirus-vaccine.jpg" alt=""/></a>
          <a href="assets/img/Online-course.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/Online-course.jpg" alt=""/></a>
          <a href="assets/img/gallery/gallery-7.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-7.jpg" alt=""/></a>
          <a href="assets/img/gallery/gallery-8.jpg" class="venobox" data-gall="gallery-carousel"><img src="assets/img/gallery/gallery-8.jpg" alt=""/></a>
        </div>

      </div>
    </section>
   
    
  </main>


  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-6 col-md-6">
            <div class="footer-info">
              <h3>Covi-Help</h3>
              <p>
                Ferozepur,Cantt<br/>
               
                <strong>Phone:</strong> 8727888573<br/>
                <strong>Email:</strong> covihelp@gmail.com<br/>
              </p>
              <div class="social-links mt-3">
                <a href="/" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="/" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="/" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="/" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
            </ul>
          </div>

          

         

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Covi-Help</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
      
        Designed by <a href="https://bootstrapmade.com/">Karanveer,Nitik and Parul</a>
      </div>
    </div>
  </footer>



       </Base>
    
</div>
    
    )
}

export default Home
