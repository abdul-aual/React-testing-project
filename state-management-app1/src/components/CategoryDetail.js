import React, { useContext } from 'react';
import { context } from '../App';

const CategoryDetail = ({count}) => {
    const count2 = useContext(context);
    return (
        <div>
            <p>This is category details  {count} </p>
            <small>This is count using create context {count2}</small>
        </div>
    );
};

export default CategoryDetail;