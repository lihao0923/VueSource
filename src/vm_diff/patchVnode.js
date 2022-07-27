import createElement from './createElement';
import updateChildren from './updateChildren';

export default function patchVnode(oldVnode, newVnode) {
    // 是同一个节点
    if(oldVnode === newVnode) {
        return;
    }

    if(newVnode.text !== undefined && (newVnode.children === undefined || newVnode.children.length > 0)) {
        if(newVnode.text !== oldVnode.text) {
            oldVnode.elm.innerText = newVnode.text;
        }
    } else {
        if(oldVnode.children !== undefined && oldVnode.children.length > 0) {
            // let un = 0;
            //
            // for(let i = 0; i < newVnode.children.length; i++) {
            //     let ch = newVnode.children[i];
            //     let isExist = false;
            //
            //     for(let j = 0; j < oldVnode.children.length; j++) {
            //         if(oldVnode.children[j].sel === ch.sel && oldVnode.children[j].key === ch.key) {
            //             isExist = true;
            //         }
            //     }
            //
            //     if(!isExist) {
            //         // console.log(ch, i)
            //         let dom = createElement(ch);
            //         ch.elm = dom;
            //         if(un < oldVnode.children.length) {
            //             oldVnode.elm.insertBefore(dom, oldVnode.children[un].elm);
            //         } else {
            //             oldVnode.elm.appendChild(dom);
            //         }
            //
            //     } else {
            //         un++;
            //     }
            // }


            updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);

        } else {
            oldVnode.elm.innerHTML = '';
            for(let i = 0; i < newVnode.children.length; i++) {
                let dom = createElement(newVnode.children[i]);
                oldVnode.elm.appendChild(dom);
            }
        }
    }
}
