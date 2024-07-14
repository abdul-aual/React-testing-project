import React, { useState, useEffect } from 'react';

const Home = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const storedNamesJSON = localStorage.getItem('names');
    if (storedNamesJSON) {
      setNames(JSON.parse(storedNamesJSON));
    }
  }, []);

  return (
    <div>
      <p>This is home bro</p>
      <div>
        {names.length > 0 ? (
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        ) : (
          <p>No names stored in localStorage.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
