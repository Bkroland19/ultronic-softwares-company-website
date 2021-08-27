import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LanguageIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Typography } from "@material-ui/core";
function Footer() {
    let  now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let time = `${date}/${month}/${year}`;

    return (
        <div className = "footer grid grid-flow-dense sm:text-sm align-items:center display:flex overflow-x-hidden ">
           <div className =" mt-2 ">
              <h2 className ="mb-2 text-xl">About us</h2> 
              <p className ="text-sm "> 
                Building all kinds of quality software needed 
                @Ultronic-Software-Company
              </p>

              <p className ="text-sm  mb-2 mt-2 " >
                
             </p>

               <h5 className = "my-2 text-sm"> Follow us.....</h5>
              <ul className = "flex space-x-3 cursor-pointer">
                  <li>
                 <a href="https://facebook.com">
                      < FacebookIcon/>
                </a>
                  </li>
   
                  <li>
                  <a href="https://twitter.com" >
                      < TwitterIcon/>
                 </a>
                  </li>

                  <li>
                  <a href="https://instagram.com">
                      < InstagramIcon/>
                </a>
                  </li>

               
              </ul>
              <h5 className = "text-sm mt-3">On {time} </h5>
           </div> 

           <div className = "mt-2 mr-70">
             <h2 className = " text-xl" ><LanguageIcon/> Langauges</h2>
               <ul className = "flex space-x-3 mb-3 text-sm">
                <li>English</li>
                {/* <li>Luganda</li>
                <li>Swahili</li> */}
               </ul>
               <p className = "flex space-x-2">
               <img  className = "my-2 h-5 w-7" src = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg"/>
               <img  className = "my-2 h-5 w-7" src ="/assets/lo.jpg"/>
              
               </p>
               
                <ul className = "mt-3">
                    <li className="mt-2">Terms of Service</li>
                    <li className="mt-2"> Privacy Policy</li>
                    <li className="mt-2">License Terms</li>
                </ul>
               
           </div>
    
          <div className = "mt-2">
               <h2 className = " text-xl" >Contact Information</h2>
                <p className ="text-sm  mb-2 mx-auto p-2" >
              
                </p>
                <h5>Contact Us</h5>
                <ul>
                    <li><PhoneIcon/> :   +256708832767/+256778354423</li>
               
                    <li><MailOutlineIcon/>: ultronicsoftwaredevs@gmail.com</li>
                </ul>
               
              
           </div> 

           <div className = " mt-5 md:col-span-full text-lg w-full  items-center  mr-30px">
              
               <Typography>
                Copyright &copy;
                 {year}
                All rights reserved | Ultronic Software Company 
              
                </Typography>
           </div>

        </div>
    );
}

export default Footer;
