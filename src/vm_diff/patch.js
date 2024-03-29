/*
*
*/

import vnode from './vnode';
import createElement from './createElement';
import patchVnode from './patchVnode';

export default function (oldVnode, newVnode) {
    if(oldVnode.sel === '' || oldVnode.sel === undefined) {
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);
    }

    if(oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
        // 是同一个节点
        patchVnode(oldVnode, newVnode);
    } else {
        let newVnodeElm = createElement(newVnode);

        if(oldVnode.elm.parentNode && newVnodeElm) {
            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm);
        }

        oldVnode.elm.parentNode.removeChild(oldVnode.elm);
    }

    // console.log(oldVnode);
}



