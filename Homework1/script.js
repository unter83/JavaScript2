// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

function task11() {
    arr = [1, 5, 7, 9];
    const minNum = (arr) => Math.min(...arr);
    console.log(minNum(arr));
}


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function task12() {
    number = 3;
    const createCounter = (number) => {
        return {
            increment: () => number + 1, 
            decrement: () => number - 1
        };
    };

    console.log(createCounter(3).increment());
    console.log(createCounter(3).decrement());
}


// 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// // примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)


function task13() {
    number = 3;
    const factorial = (number) => {
        if (number <= 1)
            return 1;
        else{
            return factorial(number - 1) * number;
        }
    };
    console.log(factorial(6));
    console.log(factorial(5));
    console.log(factorial(2));
    console.log(factorial(1));
    console.log(factorial(0));
}

// 4) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// *Пример**
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);