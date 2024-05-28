import { useContext, useRef } from "react";
import { tableContext } from "../context/tableContextProvider";
import Modal from "../Modal/Modal";

export default function Header() {

    const modal = useRef();

    const { meals } = useContext(tableContext);

    function handleOpenCartClick() {
        modal.current.show();
    }

    return (
        <>
            <Modal ref={modal} />
            <header className="fixed" id="main-header">
                <div id="title">
                    <img src="logo.jpg" />
                    <h1>MIGUEL'S FOOD</h1>
                </div>
                <p>
                    <button className="text-button" onClick={handleOpenCartClick}>Cart{`(${meals.length})`}</button>
                </p>
            </header>
        </>
    );
}