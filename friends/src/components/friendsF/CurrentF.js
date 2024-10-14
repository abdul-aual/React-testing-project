import React from 'react';
import { useParams } from 'react-router-dom';

const CurrentF = () => {
    const {id} = useParams()
    return (
        <div>
            <p>this is current friends</p>
            <p>{id}</p>
        </div>
    );
};

export default CurrentF;