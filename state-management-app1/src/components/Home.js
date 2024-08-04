import React from 'react';
import Categories from './Categories';

const Home = ({gonona}) => {
   // let {gonona}=props;
    return ( 
        <div>
            <h1>This is home {gonona}</h1>
            <Categories  count={gonona} ></Categories>
        </div>
    );
};

export default Home;