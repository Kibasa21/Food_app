import { useContext } from "react";
import { tableContext } from "../context/tableContextProvider";


export default function Product({id, image, name, price, description}) {

    const {addMealToTable} = useContext(tableContext);

    return (
        <article>
            <img src={'https://food-app-ec0c.onrender.com/images/'+image} alt={name} />
            <div>
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-price">${price}</p>
                    <p className="meal-item-description">{description}</p>
                </div>
                <p className="meal-item-action">
                    <button className="button" onClick={() => addMealToTable(id)}>
                        <strong>Order</strong>
                    </button>
                </p>
            </div>
        </article>
    );
}