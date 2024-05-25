import { useRef } from "react";
import Cart from "./Cart";

export default function Header() {

    const modal = useRef();

    function handleOpenCartClick() {
        modal.current.open();
    }

    return (
        <>
            <Cart ref={modal} />
            <header id="main-header">
                <div id="title">
                    <img src="logo.jpg" />
                    <h1>MIGUEL'S FOOD</h1>
                </div>
                <p>
                    <button className="text-button" onClick={handleOpenCartClick}>Cart</button>
                </p>
            </header>
        </>
    );
}