import React from "react";
import { MDBAnimation } from "mdbreact";
import LogoRoxo from '../../assets/logobranco.svg';

const AnimationPage = () => {
    return (
        <MDBAnimation type="bounce" infinite>
               <img src={LogoRoxo} alt=""/><br />
        </MDBAnimation>
    );
};

export default AnimationPage;