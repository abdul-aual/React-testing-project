import React, { useEffect, useState } from 'react';
import News from '../newsFolder/News';

const TopHeadline = () => {
const [news, setNews] =useState([]);
useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=deee12ead05449959bfbbbd4a1db60e0')
    .then(res=>res.json())
    .then(data=>{
        setNews(data.articles);
        console.log(data.articles);
    })
    
},[])

    return (
        <div>
            <h1>Total Headline: {news.length}</h1>
            {
                news.map(singleNews=><News singleNews={singleNews} ></News>)
            }
            
        </div>
    );
};

export default TopHeadline;