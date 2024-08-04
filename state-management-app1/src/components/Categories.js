import React from 'react';
import CategoryDetail from './CategoryDetail';

const Categories = ({count}) => {
    return (
        <div>
            <h3>This is categories</h3>
            <CategoryDetail count={count}></CategoryDetail>
        </div>
    );
};

export default Categories;