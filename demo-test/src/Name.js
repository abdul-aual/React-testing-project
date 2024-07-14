import React, { useEffect, useState } from 'react';

const Name = () => {
    
    const [names, setNames] = useState([]);
    useEffect(()=>{
        const secondName=['baki bond' , 'soyeb bond' , 'kochu bond' , 'ayhan bond', 'vondo bond'];
        localStorage.setItem('secondName', JSON.stringify(secondName))
    })
    useEffect(()=>{
         const storedNames=localStorage.getItem('names');
        if(storedNames){
            setNames(JSON.parse(storedNames));
            }
    },[]);
    

    return (
        <div>
            <p>This is name array bro</p>
            {
                names.map((name,index)=>(
                    <p key={index}>{name}</p>
                ))
            }
        </div>
    );
};

export default Name;