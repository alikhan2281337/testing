// 1 
// const extrNumbers = (string) => {
//     const numbers = /\d+/g
//     const matches = string.match(numbers)
//     return matches ? matches.join('') : ''
// }
// console.log(extrNumbers('asd123asdaw'));
// 2 
// const fib = ( a = 0, b = 1) => {
//     if (a > 144) return; // Остановка, если достигнуто число 144
//     console.log(a);
//     setTimeout(() => fib( b, a + b), 1000); // Задержка в 1 секунду и рекурсивный вызов
// };

// fib();
// 3
// const request = async () => {
//     const getting = await fetch(`https://fakestoreapi.com/products`)
//     const data = await getting.json()
//     data.forEach(element => {
//         console.log(element.title);
//     });
// }
// request()
// 4 
// const buttons = document.querySelectorAll('.buttons')
// const background = document.body
// buttons.forEach(element => {
//     element.onclick = () => {
//         background.style.background = `${element.innerText}`
//     }
// });
// 5
// const button = document.querySelector('.block')
// const miniBlock = document.querySelector('.miniBlock')
// let switcher = 0
// button.onclick = () => {
//     switch (switcher) {
//         case 0:
//             miniBlock.style.display = "block"
//             switcher = 1
//             break;
//         case 1:
//             miniBlock.style.display = "none"
//             switcher = 0
//             break;
//         default:
//             break;
//     }
// }
// 6 
// const integer = document.querySelector('.integer')
// let count = 0
// const counter = () => {
//     integer.textContent = count 
//     if(count < 100){
//         count++
//         setTimeout(counter, 1)
//     }
// }
// counter()


