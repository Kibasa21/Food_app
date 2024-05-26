import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { tableContext } from "../context/tableContextProvider";

const Cart = forwardRef(function Cart({ onCheckout }, ref) {

    const dialog = useRef();

    const { meals, total, updateMealQuantity } = useContext(tableContext);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
            close: () => {
                dialog.current.close();
            }
        };
    });

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
                <strong>{total}</strong>
            </p>
            <div className="modal-actions">
                <button className="text-button" onClick={() => dialog.current.close()}>Close</button>
                <button className="button" onClick={onCheckout}>Go to Checkout</button>
            </div>
        </dialog>
    );
})

export default Cart;