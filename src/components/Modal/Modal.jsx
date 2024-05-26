import { forwardRef, useState, useRef, useImperativeHandle } from "react";
import Register from "../Register/Register";
import Cart from "../Header/Cart";

const Modal = forwardRef(function Modal ({}, ref) {

    const modal = useRef();
    const reg = useRef();

    function handleCheckout() {
        modal.current.close();
        reg.current.show();
    }

    useImperativeHandle(ref, () => {
        return {
            show: () => {
                modal.current.open();
            }
        };
    });

    return(
        <>
            <Cart onCheckout={handleCheckout} ref={modal} />
            <Register ref={reg} />
        </>
    );
});

export default Modal;