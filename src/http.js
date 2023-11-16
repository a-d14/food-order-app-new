export async function fetchMeals() {
    const res = await fetch('http://localhost:3000/meals');
    const data = await res.json();

    if(!res.ok) {
        throw new Error('Could not load data. Try again later!');
    }

    console.log(data);

    return data;
}