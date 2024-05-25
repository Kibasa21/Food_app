import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Cart = forwardRef(function Cart({ }, ref) {

    const dialog = useRef();

    const isModalOpen = useState(false);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            }
        };
    });

    return (
        <dialog ref={dialog} className="modal">
            <h2 className="cart">Your Table</h2>
            <li className="cart-item"> {/* Organizar */}
                <div className="cart-item">
                    <span>Snackzin - 12 pau</span>
                </div>
                <div className="cart-item-actions">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </li>
            <li className="cart-item">
                <div className="cart-item">
                    <span>Snackzao - 30 pau</span>
                </div>
                <div className="cart-item-actions">
                    <button>-</button>
                    <span>2</span>
                    <button>+</button>
                </div>
            </li>
            <p className="cart-total">
                <strong>R$ 42 pau</strong>
            </p>
            <div className="modal-actions">
                <button className="text-button" onClick={() => dialog.current.close()}>Close</button>
                <button className="button">Go to Checkout</button>
            </div>
        </dialog>
    );
})

export default Cart;