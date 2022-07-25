// console.log('mySnabbdom!');
import h from './h';
import patch from './patch';

// let myVnode1 = h('div', {}, [
//     h('p', {}, 'hello'),
//     h('p', {}, 'world'),
//     h('p', {}, h('span', {}, 'shit!!!'))
// ]);
// console.log(myVnode1);
// let myVnode2 = h('ul', {}, [
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
//
// console.log(myVnode2);

let myVnode1 = h('ul', {}, [
    h('li', {},'Apple'),
    h('li', {},'Banana'),
    h('li', {},'Watermelon'),
    h('li', {},[
        h('div', {},[
            h('p', {},'milk'),
            h('p', {},'cola')
        ])
    ]),
    h('li', {},'Kiwi'),
]);

let myVnode2 = h('section', {}, [
    h('h1', {},'苹果'),
    h('h1', {},'香蕉'),
    h('h1', {},'西瓜'),
]);


const container = document.getElementById('container');
patch(container, myVnode1);

const btn = document.getElementById('btn');
btn.onclick = function() {
    patch(myVnode1, myVnode2);
};




