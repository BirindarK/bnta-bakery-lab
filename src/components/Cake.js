import './Cake.css'
const Cake = ({ cakeName, ingredients, price, rating, cakeSold, onButtonClick }) => {
    const handleSellCake = () => {
        onButtonClick(cakeName);
    };

    return (
        <div className="cakes"> 
            <h3>{cakeName} For Sale</h3>
            <p>Ingredients: {ingredients.join(', ')}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <button onClick={handleSellCake}>Sell Cake</button>
            </div>
    );
};

export default Cake;