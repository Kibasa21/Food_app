import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { tableContext } from "../context/tableContextProvider";

const Cart = forwardRef(function Cart({ }, ref) {

    const dialog = useRef();

    const { meals, updateMealQuantity } = useContext(tableContext);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            }
        };
    });

    function calculateTotal() {
        let total = 0;
        meals.map((meal) => total += (meal.qnt)*(+meal.price));

        total = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(total);
        
        return total;
    }

    return (
        <dialog ref={dialog} className="modal">
            <h2 className="cart">Your Table</h2>
            {
                meals.map((meal) => (
                    <li className="cart-item" key={meal.id}>
                        <div className="cart-item">
                            <span>{meal.name} - ${meal.price}</span>
                        </div>
                        <div className="cart-item-actions">
                            <button onClick={() => updateMealQuantity('-', meal.id)}>-</button>
                            <span>{meal.qnt}</span>
                            <button onClick={() => updateMealQuantity('+', meal.id)}>+</button>
                        </div>
                    </li>
                ))
            }
            <p className="cart-total">
                <strong>{calculateTotal()}</strong>
            </p>
            <div className="modal-actions">
                <button className="text-button" onClick={() => dialog.current.close()}>Close</button>
                <button className="button">Go to Checkout</button>
            </div>
        </dialog>
    );
})

export default Cart;