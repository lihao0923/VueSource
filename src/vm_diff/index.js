import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
  } from "snabbdom";
  
// 创建patch函数
let patch = init([classModule, propsModule, styleModule, eventListenersModule]);


// 创建虚拟节点
let myVnode1 = h('a', {props: { href: 'https://www.baidu.com'}}, '百度一下');
let myVnode2 = h('div', '我是一个div');
let myVnode3 = h('ul', [
    h('li', 'Apple'),
    h('li', 'Banana'),
    h('li', 'Watermelon'),
    h('li', [
        h('div', [
            h('p', 'milk'),
            h('p', 'cola')
        ])
    ]),
    h('li', 'Kiwi'),
])


// 让虚拟节点上树
const container = document.getElementById('container');
patch(container, myVnode3);

