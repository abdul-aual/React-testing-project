import React from 'react';
import { Button } from 'react-bootstrap';
import headline from './headline.css';

const Headline = () => {
    return (
        <div className='maindiv'>
            <h1>Breaking News!</h1>
            <p>This is simple unit</p>
            <Button variant="primary">Learn More</Button>
            
        </div>
    );
};

export default Headline;