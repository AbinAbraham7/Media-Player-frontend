import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'






function Footer() {
  return (
   <>
   <div className="container-fluid p-3">
    <div className="row w-100">
        <div className="col-md-4">
        <div className='text-warning  '>
            
          <h4 className='text-warning'><FontAwesomeIcon icon={faVideo}  className='me-2'/>
            Media Player</h4>  
         
          <div className="row w-100">
            <div className="col-md-12  fs-5">
                <p className='mt-2' style={{fontSize:"15px",color:"white",textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, impedit, sequi nisi, sit laboriosam distinctio optio delectus dolorum voluptate tenetur.</p>
            </div>
          </div>
          </div>
        </div>
        <div className="col-md-2">
            <div >
                <h4>Links</h4>
                <div>
                   <Link style={{textDecoration:"none"}} to={'/'}><h4 className='mt-2 ms-2 ' style={{fontSize:"15px"}}> Landing Page
                    </h4></Link>
                    <Link style={{textDecoration:"none"}} to={'/Home'}><h4 className='mt-2 ms-2 ' style={{fontSize:"15px"}}>
                        Home
                    </h4></Link>
                    <Link style={{textDecoration:"none"}} to={'/Watchhistory'}><h4 className='mt-2 ms-2 ' style={{fontSize:"15px"}}>
                    Watch History
                    </h4></Link>
                    
                    
                </div>
            </div>
        </div>
        <div className="col-md-2">
            <div >
            <h4 >Guides</h4>
            <h4 style={{fontSize:"15px"}} className='mt-2 ms-3 '>
                React
            </h4 >
            <h4 style={{fontSize:"15px"}} className='mt-2 ms-3 '>
                React bootstrap
                </h4>
            <h4 style={{fontSize:"15px"}} className='mt-2 ms-3 '> 
                Bootswatch
            </h4>
            </div>
        </div>
        <div className="col-md-4">
            <h4>Contact Us</h4>
            <div className="d-flex ">
                
                    <input type="text" className="form-control" placeholder='Email us'/>
             
                    <button className="btn btn-warning ms-2">Subscribe</button>
                
            </div>
            
                <div className="d-flex justify-content-between mt-2" >
                 
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#e5ebf5",fontSize:"30px"}} />
                  
                    <FontAwesomeIcon icon={faTwitter} style={{color: "#e5ebf5",fontSize:"30px"}}/>
                  
                    <FontAwesomeIcon icon={faWhatsapp} style={{color: "#e5ebf5",fontSize:"30px"}}/>
                    
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#e5ebf5",fontSize:"30px"}}/>
                   
                    <FontAwesomeIcon icon={faFacebook} style={{color: "#e5ebf5",fontSize:"30px"}}/>
                    
           
          

            
           
            </div>


        </div>
    </div>
   </div>
   </>
  )
}

export default Footer