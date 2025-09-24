export async function getMeals() {
    const response = await fetch('http://localhost:3000/meals');
    if (!response.ok) {
        throw new Response(JSON.stringify({ title: 'Error', message: 'An Error occured' }), {
            status: 500,
        });
    }
    const data = await response.json();
    return data;
}

export function calculateCartTotal(cartItems) {
    const initialValue = 0;
    const total = cartItems.reduce((acc, currentValue) => {
        return acc + currentValue.quantity * JSON.parse(currentValue.price);
    }, initialValue);
    return total.toFixed(2);
}
