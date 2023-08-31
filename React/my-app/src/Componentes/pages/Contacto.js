import React from 'react'
import Footer from '../Footer.js'
import Header from '../Header.js'

export const Contacto = () => {
  return (
   <>
    < Header />

<section className="site-banner jarallax padding-large"  >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-title">Contacto</h1>
            
          </div>
        </div>
      </div>
    </section>

    <section className="contact-information padding-large">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="section-header">
              <h2 className="section-title">Get in touch</h2>
            </div>
            <div className="contact-detail">
              <div className="detail-list">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <ul className="list-unstyled list-icon">
                  <li>
                    <a href="#"><i className="icon icon-phone"></i>+1650-243-0000</a>
                  </li>
                  <li>
                    <a href="mailto:info@yourcompany.com"><i className="icon icon-mail"></i>info@yourcompany.com</a>
                  </li>
                  <li>
                    <a href="#"><i className="icon icon-map-pin"></i>North Melbourne VIC 3051, Australia</a>
                  </li>
                </ul>
              </div>
              <div className="social-links">
                <h3>Social Links</h3>
                <ul className="d-flex list-unstyled">
                  <li><a href="#" className="icon icon-facebook"></a></li>
                  <li><a href="#" className="icon icon-twitter"></a></li>
                  <li><a href="#" className="icon icon-instagram"></a></li>
                  <li><a href="#" className="icon icon-youtube-play"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-information">
              <div className="section-header">
                <h2 className="section-title">Send us a message</h2>
              </div>
              <form name="contactform" action="contact.php" method="post" className="contact-form">
                <div className="form-item">
                  <input type="text" minlength="2" name="name" placeholder="Name" className="u-full-width bg-light" required/>
                  <input type="email" name="email" placeholder="E-mail" className="u-full-width bg-light" required />
                  <textarea className="u-full-width bg-light Mensaje" name="message" placeholder="Message"  required></textarea>
                </div>
                <label>  
                  <input type="checkbox" required/> 
                  <span className="label-body">I agree all the <a href="#">terms and conditions</a>
                  </span>
                </label>
                <button type="submit" name="submit" className="btn btn-dark btn-full btn-medium">Submit</button>
            </form>
              
            </div>
          </div>
        </div>
      </div>
     

    </section>

    <section className="google-map">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <a href="https://getasearch.com/fmovies" className='mapouter'></a>
          <br></br>
         
          <a href="https://www.embedgooglemap.net" className='Map'>embedgooglemap.net </a>
          
        </div>
      </div>
    </section>
< Footer/>
    </> 
  
)  
  
}