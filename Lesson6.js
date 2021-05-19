/*
console.log('111')

setTimeout(()=> Promise.resolve("222").then((val)=> console.log(val)),0)

Promise.resolve("333").then((val)=> console.log(val))

console.log('444')

Promise.resolve("555").then((val)=> console.log(val))
*/

let button = document.getElementsByName("button")
button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 1'));
    console.log('Listener 1');
});

button.addEventListener('click', () => {
    Promise.resolve().then(() => console.log('Microtask 2'));
    console.log('Listener 2');
});
