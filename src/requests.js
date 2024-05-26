export async function fetchMeals() {
    const response = await fetch('https://food-app-ec0c.onrender.com/meals');
    const resData = await response.json();

    if(!response.ok){
        throw new Error('Oh no! Failed to find food.');
    }

    return resData;
}

export async function updateOrder(order) {
    const response = await fetch('https://food-app-ec0c.onrender.com/orders', {
        method: 'POST',
        body: JSON.stringify({order: order}),
        headers: {
            'content-type': 'application/json'
        }
    });

    const resData = await response.json();

    if(!response.ok){
        throw new Error('Oh no! Failed to find your food.');
    }

    return resData.message;
}