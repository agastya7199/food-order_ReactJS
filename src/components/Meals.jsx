import { useContext } from 'react';
import { mealsData } from '../mealsData.js';
import CartContextComp from '../context/CartContextComp.jsx';

export default function Meals() {
    const { handleAddItems } = useContext(CartContextComp.cartContext);

    function addToCartHandler(event) {
        const selectedElement = mealsData.find((item) => item.id === event.target.dataset.id);
        handleAddItems(selectedElement);
    }

    return (
        <>
            <section>
                {mealsData && (
                    <ul id="meals">
                        {mealsData.map((item) => {
                            return (
                                <li className="meal-item" key={item.id}>
                                    <article>
                                        <img src={item.image} alt={item.name}></img>
                                        <h3>{item.name}</h3>
                                        <p className="meal-item-price">${item.price}</p>
                                        <p className="meal-item-description">{item.description}</p>
                                        <div className="meal-item-actions">
                                            <button
                                                className="button"
                                                data-id={item.id}
                                                onClick={addToCartHandler}
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </article>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </section>
        </>
    );
}
