import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macarons';
import GiftsParties from './gifts_parties';
import Contact from './contact';

export default ()=>{
    return (
        <div className={"container"}>
            <Nav />
            <Route path="/" component={Welcome} exact />
            <Route path="/our-macarons" component={OurMacarons} exact />
            <Route path="/gifts-parties" component={GiftsParties} exact />
            <Route path="/contact" component={Contact} exact />
        </div>
    )
}