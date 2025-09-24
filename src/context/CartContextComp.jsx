import { useState, createContext } from 'react';
// import CartContext from './CartContext';

const CartContext = createContext({
    items: [],
    handleAddItems: () => {},
    handleDeleteItems: () => {},
    handleUpdateItems: () => {},
});

export default function CartContextComp({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function handleAddItemsToCart(selectedElement) {
        setCartItems((prevCartItems) => {
            const selectedItemIndex = prevCartItems.findIndex(
                (item) => item.id === selectedElement.id
            );
            if (selectedItemIndex !== -1) {
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[selectedItemIndex] = {
                    ...updatedCartItems[selectedItemIndex],
                    quantity: updatedCartItems[selectedItemIndex].quantity + 1,
                };
                return updatedCartItems;
            }
            return [...prevCartItems, { ...selectedElement, quantity: 1 }];
        });
    }

    function handleDeleteItemsFromCart(selectedElement) {
        const selectedIndex = cartItems.findIndex((item) => item.id === selectedElement.id);
        setCartItems((prevCartItems) => {
            if (selectedElement.quantity <= 1) {
                return cartItems.filter((items) => items.id !== selectedElement.id);
            } else {
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[selectedIndex] = {
                    ...updatedCartItems[selectedIndex],
                    quantity: updatedCartItems[selectedIndex].quantity - 1,
                };
                return updatedCartItems;
            }
        });
    }

    function handleUpdateItemQuantity(selectedElement, updationKey) {
        if (updationKey === '+') {
            handleAddItemsToCart(selectedElement);
        } else if (updationKey === '-') {
            handleDeleteItemsFromCart(selectedElement);
        }
    }

    const cartCtx = {
        items: cartItems,
        handleAddItems: handleAddItemsToCart,
        handleDeleteItems: handleDeleteItemsFromCart,
        handleUpdateItems: handleUpdateItemQuantity,
    };

    return (
        <>
            <CartContext.Provider value={{ ...cartCtx, setCartItems }}>
                {children}
            </CartContext.Provider>
        </>
    );
}

CartContextComp.cartContext = CartContext;
// adding new property named "cartContext" to function object and assigning context definition to it.
