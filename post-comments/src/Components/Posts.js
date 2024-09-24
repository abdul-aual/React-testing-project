import React, { useEffect, useState } from 'react';
import PostDetails from './PostDetails';
import { Navigate } from 'react-router-dom';

const Posts = () => {
    const [data,setData]=useState([]);
    const handleDetails = (id)=>{
        Navigate('/postDetails/${}')
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]);
    return (
        <div>
            {
                data.map((datum,index)=> 
                    <PostDetails  postsData={datum}  key={index}    handleDetails={handleDetails}  ></PostDetails>
                  )
            }
        </div>
    );
};

export default Posts;