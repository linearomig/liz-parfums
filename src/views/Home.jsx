import React from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";

import '../styles/view/home.scss';
import PublicNavbar from "../components/PublicNavbar";


function Home() {

    return (
        <>
            
            <PublicNavbar/>

            <Banner />

            <Products />

            


        </>
    );
};

export default Home;
