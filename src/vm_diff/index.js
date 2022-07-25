// console.log('mySnabbdom!');
import h from './h';
// let myVnode1 = h('div', {}, [
//     h('p', {}, 'hello'),
//     h('p', {}, 'world'),
//     h('p', {}, h('span', {}, 'shit!!!'))
// ]);
// console.log(myVnode1);

let myVnode2 = h('ul', {}, [
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

console.log(myVnode2);





