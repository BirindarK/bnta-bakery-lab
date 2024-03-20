import './CakeContainer.css'
import React, { useState } from 'react';
import Cake from '../components/Cake';

const CakeContainer = () => {

    const [cakes, setCakes] = useState([
        // Victoria Sponge
        {
            cakeName: "Victoria Sponge",
            ingredients: [
                "eggs",
                "butter",
                "sugar",
                "self-raising flour",
                "baking powder",
                "milk"
            ],
            price: 5,
            rating: 5,
            cakeSold: 0
        },

        // Tea Loaf
        {
            cakeName: "Tea Loaf",
            ingredients: [
                "eggs",
                "oil",
                "dried fruit",
                "sugar",
                "self-raising flour",
                "strong tea",
            ],
            price: 2,
            rating: 3,
            cakeSold: 0
        },

        // Carrot Cake
        {
            cakeName: "Carrot Cake",
            ingredients: [
                "carrots",
                "walnuts",
                "oil",
                "cream cheese",
                "flour",
                "sugar",
            ],
            price: 8,
            rating: 5,
            cakeSold: 0
        }
    ]);

    const sellCake = (cakeName) => {
        const updatedCakes = cakes.map(cake => {
            if (cake.cakeName === cakeName) {
                return {
                    ...cake,
                    cakeSold: cake.cakeSold + 1
                };
            }
            return cake;
        });
        setCakes(updatedCakes);
    };

    const averageCakeRating = () => {
        let totalRating = 0;
        cakes.forEach(cake => {
            totalRating += cake.rating;
        });
        return totalRating / cakes.length;
    }

    const calculateTotalProfit = () => {
        let totalProfit = 0;
        cakes.forEach(cake => {
            totalProfit += cake.price * cake.cakeSold;
        });
        return totalProfit;
    };

    return (
        <div>
            <div className = "sale">
            <h2>Cakes For Sale</h2>
            </div>

            <div className = "cake" >
            {cakes.map(cake => (
                <Cake
                    key={cake.cakeName}
                    cakeName={cake.cakeName}
                    ingredients={cake.ingredients}
                    price={cake.price}
                    rating={cake.rating}
                    cakeSold={cake.cakeSold}
                    onButtonClick={() => sellCake(cake.cakeName)}
                />
        
            ))}

            </div>
            <div className = "methods">
                <div className="rating">
            <h2>Average Cake Rating:</h2>
            <h3>{averageCakeRating()}</h3>
            </div>

            <div className="profit">
            <h2>Total Profit: </h2>
            <h3>{calculateTotalProfit()}</h3>
            </div>
            
            </div>
        </div>
    );
}

export default CakeContainer;