/*Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.*/
function task41() {
    

    const URL = 'https://jsonplaceholder.typicode.com/users';

    const body = document.querySelector('body');

    body.insertAdjacentHTML('beforeEnd', `<div><ol>`);

    const getData  = (URL) => new Promise((resolve, reject) => {
    fetch(URL)
        .then((response) => response.json())
        .then((json) => resolve(json))
        .catch((error) => reject.error());
    });

    
    getData(URL)
        .then((data) => {
            data.forEach(element => { 
                            console.log(data);
                            body.insertAdjacentHTML('beforeEnd',
                            `<li>"${element.name}"</li>`       
                            );
                        });
        })
        .catch((error) => console.log(error));
            body.insertAdjacentHTML('beforeEnd',
            `</ol></div>`);
//     const getData = async (URL) => {
//         const res = await fetch(URL);
//         const data = await res.json();
//         return data;
//     }

//     try {
//         const data = await getData(URL);
    
//         body.insertAdjacentHTML('beforeEnd',
//         `<div><ol>`
        
//         );
//         data.forEach(element => { 
//             console.log(data);
//             body.insertAdjacentHTML('beforeEnd',
//             `<li>"${element.name}"</li>`       
//             );
//         });

//         body.insertAdjacentHTML('beforeEnd',
//         `</ol></div>`);

//     } catch (error) {
//         console.error(error);
//     }
}

/* Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

*/

function task42() {
    const body = document.querySelector('body');

    const URL = 'https://dog.ceo/api/breeds/image/random';
    body.insertAdjacentHTML('beforeEnd', `<div>`);

    const getData  = (URL) => new Promise((resolve, reject) => {
        fetch(URL)
            .then((response) => response.json())
            .then((json) => resolve(json))
            .catch((error) => reject.error());
        });
        
    for (let i = 0; i < 10; i++) {
        setTimeout(() =>  getData(URL).then((data) => body.insertAdjacentHTML('beforeEnd',
        `<img src="${data.message}">` ))
        .catch((error) => console.log(error)), i * 3000);           
                    
    }
    body.insertAdjacentHTML('beforeEnd', `</div>`);

}
