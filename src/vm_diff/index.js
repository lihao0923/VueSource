// console.log('mySnabbdom!');
import h from './h';
import patch from './patch';

// let myVnode1 = h('ul', {}, [
//     h('li', {},'Apple'),
//     h('li', {},'Banana'),
//     h('li', {},'Watermelon'),
//     h('li', {},[
//         h('div', {},[
//             h('p', {},'milk'),
//             h('p', {},'cola')
//         ])
//     ]),
//     h('li', {},'Kiwi'),
// ]);
const container = document.getElementById('container');
const btn = document.getElementById('btn');

// let myVnode1 = h('section', {}, [
//     h('p', {},'Apple'),
//     h('p', {},'Banana'),
//     h('p', {},'Watermelon')
// ]);

// let myVnode2 = h('section', {}, [
//     h('p', {},'Apple'),
//     h('p', {},'Banana'),
//     h('p', {},'Watermelon'),
//     h('p', {},'pear'),
// ]);
let myVnode1 = h('ul', {}, [
    h('li', {key: 'A'},'A'),
    h('li', {key: 'B'},'B'),
    h('li', {key: 'C'},'C'),
    h('li', {key: 'D'},'D'),
    h('li', {key: 'E'},'E'),
]);
let myVnode2 = h('ul', {}, [
    h('li', {key: 'Q'},'Q'),
    h('li', {key: 'R'},'R'),
    h('li', {key: 'A'},'A'),
    h('li', {key: 'B'},'B'),
    h('li', {key: 'Z'},'Z'),
    h('li', {key: 'C'},'C'),
    h('li', {key: 'D'},'D'),
    h('li', {key: 'E'},'E'),
]);

patch(container, myVnode1);

btn.onclick = function() {
    patch(myVnode1, myVnode2);
};




