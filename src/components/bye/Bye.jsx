import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Bye = forwardRef(function Bye({ isEmpty }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            showBye: () => {
                dialog.current.showModal();
            }
        }
    });

    const handleOkay = () => {
        dialog.current.close();
    }

    return (
        <dialog ref={dialog} className="modal">
            <h2 className="cart">{!isEmpty ? 'Success! We\'re on it!' : 'Not hungry? :('}</h2>
            <p>{!isEmpty ? 'Your order was submitted successfully.' : 'Your order is empty, please make sure to try any of our meals on.'}</p>
            <p>{!isEmpty ? 'We\'ll get back to you with more details via email within the next minutes.' : 'You won\'t regret it!'}</p>
            <p><strong>{!isEmpty ? 'Stay tuned!' : ';)'}</strong></p>
            <div className="modal-actions">
                <button className="button" onClick={handleOkay}>{!isEmpty ? 'Okay' : 'Back to menu'}</button>
            </div>
        </dialog>
    );
});

export default Bye;