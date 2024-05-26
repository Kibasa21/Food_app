import { forwardRef, useRef, useImperativeHandle, useContext } from "react";
import Register from "../Register/Register";
import Cart from "../Header/Cart";
import Bye from "../bye/Bye";
import { tableContext } from "../context/tableContextProvider";

const Modal = forwardRef(function Modal({ }, ref) {

    const { meals } = useContext(tableContext);

    const modal = useRef();
    const reg = useRef();
    const bye = useRef();

    function handleCheckout() {
        modal.current.close();
        reg.current.show();
    }

    function handleSubmit() {
        reg.current.hide();
        bye.current.showBye();
    }


    useImperativeHandle(ref, () => {
        return {
            show: () => {
                modal.current.open();
            }
        };
    });

    return (
        <>
            <Cart onCheckout={handleCheckout} ref={modal} />
            <Register ref={reg} onSubmit={handleSubmit} />
            <Bye ref={bye} isEmpty={meals.length === 0} />
        </>
    );
});

export default Modal;