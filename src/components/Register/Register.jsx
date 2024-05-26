import { forwardRef, useContext, useImperativeHandle, useRef, useState } from "react";
import { tableContext } from "../context/tableContextProvider";
import { updateOrder } from "../../requests";

const Register = forwardRef(function Register({ onSubmit }, ref) {

    const dialog = useRef();

    const { total, meals } = useContext(tableContext);

    let isSubmitted = false;

    useImperativeHandle(ref, () => {
        return {
            show: () => {
                dialog.current.showModal();
            },
            hide: () => {
                dialog.current.close();
            },
        }
    });

    const handleReturnToMenu = () => {
        dialog.current.close();
        isSubmitted = false;
    }

    const handleSubmitOrder = () => {
        isSubmitted = true;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!isSubmitted) {
            return;
        }

        const fD = new FormData(event.target); //Isso vem do browser e serve para tratar os dados de um forms. Para ele funcionar cada input ou select deve ter um name.
        const formData = Object.fromEntries(fD.entries());//entries faz uma array com todos os names e seus values e o fromEntries faz um objeto com isso
        const wholeData = {
            customer: { ...formData },
            items: [...meals.map((meal) => ({ ...meal }))]
        };

        if (wholeData.items.length === 0) {
            onSubmit();
        } else {
            try {
                await updateOrder(wholeData);
                onSubmit();
            } catch (error) {
                return;
            }
        }
    }

    return (
        <dialog ref={dialog} className="modal">
            <form onSubmit={handleSubmit}>
                <h2 className="cart">Checkout</h2>
                <p>Total amount {total}</p>

                <div className="control">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="name" name="name" required />
                </div>

                <div className="control">
                    <label htmlFor="email">E-Mail Address</label>
                    <input id="email" type="email" name="email" required />
                </div>

                <div className="control">
                    <label htmlFor="street">Street</label>
                    <input id="street" type="street" name="street" required />
                </div>

                <div className="control-row">
                    <div className="control">
                        <label htmlFor="postal-code">Postal Code</label>
                        <input id="postal-code" type="postal-code" name="postal-code" required />
                    </div>
                    <div className="control">
                        <label htmlFor="city">City</label>
                        <input id="city" type="city" name="city" required />
                    </div>
                </div>

                <div className="modal-actions">
                    <button className="text-button" type="close" onClick={handleReturnToMenu}>Return to Menu</button>
                    <button className="button" type="submit" onClick={handleSubmitOrder}>Submit Order</button>
                </div>
            </form>
        </dialog>
    );
})

export default Register;