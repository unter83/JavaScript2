const URL = 'https://dog.ceo/api/breeds/image/random';

const body = document.querySelector('body');



const getData = async (URL) => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
}

setTimeout(() => body.insertAdjacentHTML('beforeEnd',
`<br>`), 3000);    

try {
        const data = await getData(URL);
        body.insertAdjacentHTML('beforeEnd',
        `<img src="${data.message}">`);
    } catch (error) {
        console.error(error);
    }

setTimeout(() => body.insertAdjacentHTML('beforeEnd',
    `<br>`), 3000);    
    

try {
    const data = await getData(URL);
    body.insertAdjacentHTML('beforeEnd',
    `<img src="${data.message}">`);
    } catch (error) {
        console.error(error);
    }

setTimeout(() => 3000);

    

