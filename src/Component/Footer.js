import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './Home.css';
class Footer extends Component {
    render() {
        return (
            <div>
               <div className="footer bgcol">
 <div className="row footer">
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 color">
 <p><strong class="contact-title">Contact Us</strong><p>Need help? Call us at <a href="tel:18004617960" class="tel link" itemprop="telephone">1-800-461–7960</a>, send us an <a href="mailto:info@henrys.com" itemprop="email" class="link">email</a> or visit <a href="/customer-care.aspx" class="link">customer care</a> for more information.</p>
 </p>
 </div>
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
   
 <div className="row">
 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
   
 </div>
 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
 <div className="row">
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
 </div ><h5  ><b>Hennry Shopping</b></h5>
 <p >1021 Park Street, Regina, SK S4N 5H4, Canada</p>
 </div>
 <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
 </div>
 </div>
 <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
 <div id="icon" className="row">
 <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
 <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
 <SocialIcon url="https://twitter.com/" />
 <SocialIcon url="https://www.facebook.com/" />
 <SocialIcon url="https://www.email.com/" />
 <SocialIcon url="https://www.whatsapp.com/" />
 <SocialIcon url="https://www.skype.com/" />
 <SocialIcon url="http://linkedin.com/" /> <br/> <p>Copyright @ All rights reserved</p></div>
 <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
 </div>
 </div>
 </div>
 </div>  
            </div>
        );
    }
}

export default Footer;



// import React from "react";

// export default () => {
//   return (
//     <footer className="bg-dark text-white mt-5 p-2">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4 mb-4">
//             <a>
//               <i className="fab fa-facebook mr-3" />
//             </a>
//             <a>
//               <i className="fab fa-twitter mr-3" />
//             </a>
//             <a>
//               <i className="fab fa-instagram mr-3" />
//             </a>
//           </div>
//           <div className="col-md-4 mb-4">
//             Copyright &copy; {new Date().getFullYear()}
//             <a href="#"> ShopDemo</a>
//           </div>
//           <div className="col-md-4 mb-4">
//             <a>
//               <i className="fas fa-home mr-3" />
//             </a>
//             <a>
//               <i className="fas fa-users mr-3" />
//             </a>
//             <a>
//               <i className="fas fa-phone mr-3" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };