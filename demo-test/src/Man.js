import React, { useEffect, useState } from 'react';

const Man = () => {
  const [sName, setsName] = useState([]);
  useEffect(() => {
    const names = ['arif', 'jama', 'fotuya'];
    localStorage.setItem('names', JSON.stringify(names));
  }, []);
  useEffect(()=>{
    const sotedName = localStorage.getItem('secondName');
    if(sotedName){
      setsName(JSON.parse(sotedName));
    }
  },[]);


  return (
    <div>
      <p>Hello man</p>
      <p>length: {sName.length}</p>
      {
        sName.map((name,index)=>(
          <p key={index}>{name}</p>
        ))
      }
    </div>
  );
};

export default Man;
