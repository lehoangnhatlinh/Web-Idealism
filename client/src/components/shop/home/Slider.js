// import React, { Fragment, useEffect, useContext, useState } from "react";
// import OrderSuccessMessage from "./OrderSuccessMessage";
// import { HomeContext } from "./";
// import { sliderImages } from "../../admin/dashboardAdmin/Action";
// import { prevSlide, nextSlide } from "./Mixins";

// const apiURL = process.env.REACT_APP_API_URL;

// const Slider = (props) => {
//   const { data, dispatch } = useContext(HomeContext);
//   const [slide, setSlide] = useState(0);

//   useEffect(() => {
//     sliderImages(dispatch);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <Fragment>
//       <div className="relative bg-gray-100 border-2">
//         {data.sliderImages.length > 0 ? (
//           <img
//             className="fix-image-slide"
//             src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
//             alt="sliderImage"
//           />
          
//         ) : (
//           ""
//         )}

//         {data?.sliderImages?.length > 0 ? (
//           <>
//             <svg
//               onClick={(e) =>
//                 prevSlide(data.sliderImages.length, slide, setSlide)
//               }
//               className={`z-10 absolute top-0 left-0 mt-64 flex justify-end items-center box-border flex justify-center w-12 h-12 text-gray-700  cursor-pointer hover:text-success`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <svg
//               onClick={(e) =>
//                 nextSlide(data.sliderImages.length, slide, setSlide)
//               }
//               className={`z-10 absolute top-0 right-0 mt-64 flex justify-start items-center box-border flex justify-center w-12 h-12 text-gray-700 cursor-pointer hover:text-success`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//             <div className="absolute inset-0 flex items-center justify-left btnBuy transform transition duration-300 hover:scale-110">
//               <a
//                 href="/productInCatogory"
//                 style={{ background: "#28A745" }}
//                 className="cursor-pointer box-border text-2xl text-white px-5 py-3 rounded-pill"
//               >
//                 Shop Now
//               </a>
//             </div>
//           </>
//         ) : null}
//       </div>
//       <OrderSuccessMessage />
//     </Fragment>
//   );
// };

// export default Slider;

import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";

const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    sliderImages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % data.sliderImages.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [data.sliderImages.length]);

  return (
    <Fragment>
      <div className="relative bg-gray-100 border-2">
        {data.sliderImages.length > 0 ? (
          <img
            className="fix-image-slide"
            src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
            alt="sliderImage"
          />
          
        ) : (
          ""
        )}

        {data?.sliderImages?.length > 0 ? (
          <>
            {/* <svg
              onClick={(e) =>
                prevSlide(data.sliderImages.length, slide, setSlide)
              }
              className={`z-10 absolute top-0 left-0 mt-64 flex justify-end items-center box-border flex justify-center w-12 h-12 text-gray-700  cursor-pointer hover:text-success`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <svg
              onClick={(e) =>
                nextSlide(data.sliderImages.length, slide, setSlide)
              }
              className={`z-10 absolute top-0 right-0 mt-64 flex justify-start items-center box-border flex justify-center w-12 h-12 text-gray-700 cursor-pointer hover:text-success`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg> */}
            <div className="absolute inset-0 flex items-center justify-center btnBuy ">
              <a
                href="/productInCatogory"
                style={{ background: "#059212" }}
                className="cursor-pointer text-xl text-white px-5 py-3 rounded-pill transform transition duration-300 hover:scale-110"
              >
                BUY NOW
              </a>
            </div>
          </>
        ) : null}
      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;

