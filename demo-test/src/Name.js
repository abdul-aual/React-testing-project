import React, { useEffect, useState } from 'react';
import SingleCar from './SingleCar';

const Name = () => {
    const [carDataArray, setCarDataArray] = useState({});

    useEffect(() => {
        // Fetch car data array from local storage or initialize it
        const storedCarData = localStorage.getItem('carDataArray');
        if (storedCarData) {
            setCarDataArray(JSON.parse(storedCarData));
        } else {
            const initialCarDataArray = [
                {
                    carename: "Toyota Camry",
                    carprice: "$24,000",
                    seller: "John Doe",
                    model: "2022",
                    key: "12345-ABCDE"
                },
                {
                    carename: "Honda Accord",
                    carprice: "$27,000",
                    seller: "Jane Smith",
                    model: "2021",
                    key: "67890-FGHIJ"
                },
                {
                    carename: "Ford Mustang",
                    carprice: "$32,000",
                    seller: "Mike Johnson",
                    model: "2023",
                    key: "11223-KLMNO"
                },
                {
                    carename: "Chevrolet Malibu",
                    carprice: "$22,000",
                    seller: "Emma Brown",
                    model: "2020",
                    key: "44556-PQRST"
                },
                {
                    carename: "BMW 3 Series",
                    carprice: "$40,000",
                    seller: "David Wilson",
                    model: "2022",
                    key: "78901-UVWXY"
                }
            ];
            setCarDataArray(initialCarDataArray);
            localStorage.setItem('carDataArray', JSON.stringify(initialCarDataArray));
        }
    }, []);

    return (
        <div>
            <p>This is car data from local storage</p>
            {
                Array.isArray(carDataArray) && carDataArray.map((car, index) => (
                    

                    <SingleCar  key={index} car={car} ></SingleCar>

                    // <div key={index} style={{ borderBottom: '1px solid lightgray', paddingBottom: '10px', marginBottom: '10px' }}>
                    //     <h3>{car.carename}</h3>
                    //     <h5>Model: {car.model}</h5>
                    //     <p><strong>Price: {car.carprice}</strong></p>
                    //     <p>Seller: {car.seller}</p>
                    // </div>
                ))
            }
        </div>
    );
};

export default Name;
