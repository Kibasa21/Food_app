import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { tableContext } from "../context/tableContextProvider";

const Register = forwardRef(function Register({}, ref) {

    const dialog = useRef();

    const {total} = useContext(tableContext);

    useImperativeHandle(ref, () => {
        return {
            show: () => {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className="modal">
            <form>
                <h2 className="cart">Checkout</h2>
                <p>Total amount {total}</p>
            </form>
        </dialog>
    );
})

export default Register;