import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <Slider />
      {/* Category, Search & Filter Section */}
      {/* <ourShop /> */}
      <section className="">
        <div className=" about-shop">
          <h3 className="hearder-about-shop text-center">
            WELCOME TO OUR STORE
          </h3>
          <div className="sub-title-about-shop text-center text-xl mt-4">
            The hand care brand that's setting a new standard. Natural products, <br/>
            to help you feel good on your hands.
          </div>
          <div className="content-about-shop m-5 md:mx-8 md:my-6 grid grid-cols-1 md:grid-cols-3">
            <div className="content-about-shop-item flex mt-10 ">
              <div className="item-about-shop-image">
                <img
                  className="fix-our-shop-image"
                  src="./image/one.png"
                  alt="Girl in a jacket"
                ></img>
              </div>
              <div className="item-about-shop-content">
                <h6 className="item-about-shop-header"> Powered By Nature</h6>
                <p className="item-about-shop-header">
                  Aliquam venenatis vel lorem id <br /> nuaer mollis eget.{" "}
                </p>
              </div>
            </div>
            <div className="content-about-shop-item flex mt-10">
              <div className="item-about-shop-image">
                <img
                  className="fix-our-shop-image"
                  src="./image/two.png"
                  alt="Girl in a jacket"
                ></img>
              </div>
              <div className="item-about-shop-content">
                <h6 className="item-about-shoh6-header">Exceptional quality</h6>
                <p className="item-about-shop-header">
                  Nulla tincidunt gravida augue, eget <br /> pellentesque.
                </p>
              </div>
            </div>
            <div className="content-about-shop-item flex mt-10">
              <div className="item-about-shop-image">
                <img
                  className="fix-our-shop-image"
                  src="./image/three.png"
                  alt="Girl in a jacket"
                ></img>
              </div>
              <div className="item-about-shop-content">
                <h6 className="item-about-shoh6-header">Skin First Formulas</h6>
                <p className="item-about-shop-header">
                  Aliquam sed diam fringilla, loborti <br /> sorci nec{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mr-4 ml-4">
        <h3 className="text-4xl font-medium text-center mb-14'">OUR CATEGORIES</h3>
        <ProductCategory />
      </section>

      <section className="">
        <div className="ingMainParent mb-[130px] mt-[30px]">
          <h3 className="text-4xl font-medium text-center mt-16 mb-16'">OUR INGRIDENTS</h3>

          <div className='ingImgHold flex flex-row gap-32 justify-center'>
                <img src="./image/ing1.png" className="zoom2" />
                <img src="./image/ing2.png"  className="zoom2" />
                <img src="./image/ing3.png"  className="zoom2" />
                <img src="./image/ing4.png"  className="zoom2" />
                <img src="./image/ing5.png" className="zoom2" />
                <img src="./image/ing6.png" className="zoom2" />
            </div>

            <div className='ingTextHold flex flex-row gap-32 justify-center'>
                <p>All Natural</p>
                <p> Vegetables </p>
                <p> Fruits </p>
                <p> Vegan </p>
                <p> Essential Oils</p>
                <p> Botanical </p>

            </div>
            <br />
            <br />
            <br />
        </div>
      </section>

      {/* Product Section */}
      {/* <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProduct />
      </section> */}
      {/* <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <FollowONIG />
      </section> */}
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
