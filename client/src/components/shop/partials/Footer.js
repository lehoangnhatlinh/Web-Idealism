import React, { Fragment } from "react";
import moment from "moment";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {AiFillYoutube, AiFillFacebook, AiFillInstagram, AiFillGithub} from "react-icons/ai"

const socialLinks = [
    {
      path: "",
      icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
    },
  
    {
      path: "",
      icon: <AiFillFacebook className="group-hover:text-white w-4 h-5" />,
    },
  
    {
      path: "",
      icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
    },
  
    {
      path: "https://github.com/lehoangnhatlinh/DocEase-Booking",
      icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
    },
  ];

const Footer = (props) => {
    const year = new Date().getFullYear();
  return (
    //     <Fragment>
    //     <footer className="page-footer font-small text-white  pt-4 bg-dark  pr-5 pl-5">
    //         <div className="container-fluid text-center text-md-left">
    //             <div className="row">
    //                 <div className="col-md-6 mt-md-0 mt-3">
    //                     <h5 className="text-uppercase">Footer Content</h5>
    //                     <p>Here you can use rows and columns to organize your footer content.</p>
    //                 </div>

    //                 <hr className="clearfix w-100 d-md-none pb-0" />

    //                 <div className="col-md-3 mb-md-0 mb-3">
    //                     <h5 className="text-uppercase">ADDRESS</h5>
    //                     <ul className="list-unstyled">
    //                         <li><a href="#!" className="text-light">Khu đô thị FPT, Ngũ Hành Sơn, Đà Nẵng</a></li>

    //                     </ul>
    //                 </div>

    //                 <div className="col-md-3 mb-md-0 mb-3">
    //                     <h5 className="text-uppercase">FOLLOW US</h5>
    //                     <ul className="list-unstyled ">
    //                         <li><a href="#!" className="text-light"><span class="bi bi-facebook blue-color"> </span> Facebook</a></li>
    //                         <li><a href="#!" className="text-light"><i class="bi bi-instagram"></i> Instagram</a></li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className="footer-copyright text-center py-3 "  >© 2020 Copyright:
    //             <a href="#" className="text-light"> AROMATIC BAG </a>
    //         </div>

    //     </footer>
    // </Fragment>
    <div>
      <footer className="px-10 py-4 bg-173F35 border-top text-base border-base" style={{ backgroundColor: '#173F35' }}>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <img style={{width: '15%'}} src="/image/logo2.png" alt="Idealism" className="ml-25" />
          <div className="d-flex mt-4 gap-3 ">
            {socialLinks.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="order border-solid border-dark rounded-circle d-flex justify-content-center align-items-center group text-black bg-white"
                style={{ backgroundColor: "transparent", width: "20px", height: "20px" }}
              >
                {item.icon}
              </Link>
            ))}
          </div>
          <p className="text-16 mt-1 lh-7 font-weight-normal text-white">
            Copyright © {year} developed by IDEALISM in FPTU all right reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
