import React from "react";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";
// import Button from '../Form/Button';
import rangBanner1 from "../../assets/images/homeImage.JPG";
import rangBanner2 from "../../assets/images/homeImage2.JPG";
import medal from "../../assets/images/medal.png";


const Home = () => {
  return (
    <section className="max-w-screen-xl py-20 mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 py-14" style={{marginTop:"50px"}}>
        <Fade left>
          <div className="order-1 lg:order-1 flex flex-col justify-center h-full space-y-6">
            <div className="flex flex-col space-y-2">
              <img className="w-24" src={medal} alt="banner" />
              <h1 className="poppins text-gray-700 font-semibold text-3xl lg:text-2xl leading-relaxed">
                Best Quality <br />{" "}
                <span className="text-3xl">Surface preparation and protective coatings services</span>
              </h1>
              <p className="text-gray-500 text-light text-sm">
                Excellence in Every Layer: Unmatched Surface Prep and Protective Coatings."
                <br /> Welcome to our website.
              </p>
            </div>
            {/* button  */}
            {/* <Button className="btn-primary py-3 px-4 poppins w-48 mt-6" text="Explore our shop" onClick={() => history.push('/products')} /> */}
          </div>
        </Fade>

        <Fade right>
          <div className="order-1 lg:order-2" >
            <img src={rangBanner1} alt="banner" />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Home;
