import { useRef, useContext } from 'react';
import Logo from '/logo.jpg';
import CartModal from './CartModal.jsx';
import CartContextComp from '../context/CartContextComp.jsx';

export default function Header() {
    const cartRef = useRef();
    const { items } = useContext(CartContextComp.cartContext);

    function openCartHandler() {
        cartRef.current.open();
    }

    return (
        <>
            <section id="main-header">
                <div id="title">
                    <h1>React Food</h1>
                    <img src={Logo} alt="Logo img"></img>
                </div>
                <button className="text-button" onClick={openCartHandler}>
                    Cart {items.length ? <span>({items.length})</span> : undefined}
                </button>
            </section>
            <CartModal ref={cartRef} />
        </>
    );
}
