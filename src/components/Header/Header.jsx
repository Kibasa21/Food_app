import Cart from "./Cart";

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src="logo.jpg" />
                <h1>REACTFOOD</h1>
            </div>
            <Cart />
        </header>
    );
}