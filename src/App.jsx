import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import CartContextComp from './context/CartContextComp.jsx';

function App() {
    return (
        <>
            <CartContextComp>
                <Header />
                <Meals />
            </CartContextComp>
        </>
    );
}

export default App;
