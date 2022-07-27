/*
*
*/

import patchVnode from './patchVnode';
import createElement from './createElement';

// 判断是否是同一个虚拟节点
function checkSameVnode(a, b) {
    return a.sel === b.sel && a.key === b.key;
}

//
export default function updateChildren(parentElm, oldCh, newCh) {
    console.log('updateChildren!!!');
    console.log(oldCh, newCh);

    let oldStartIdx = 0;
    let newStartIdx = 0;

    let oldEndIdx = oldCh.length - 1;
    let newEndIdx = newCh.length - 1;

    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];

    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];

    let keyMap = null;


    while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if(oldStartVnode === null || oldCh[oldStartIdx] === undefined) {
            oldStartVnode = oldCh[++oldStartIdx];
        } else if(oldEndVnode === null || oldCh[oldEndIdx] === undefined) {
            oldEndVnode = oldCh[--oldStartIdx];
        } else if(newStartVnode === null || newCh[newStartIdx] === undefined) {
            newStartVnode = newCh[++newStartIdx];
        } else if(newEndVnode === null || newCh[newEndIdx] === undefined) {
            newEndVnode = newCh[--newEndIdx];
        } else if(checkSameVnode(oldStartVnode, newStartVnode)) {
            patchVnode(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        } else if(checkSameVnode(oldEndVnode, newEndVnode)) {
            patchVnode(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        } else if(checkSameVnode(oldStartVnode, newEndVnode)) {
            patchVnode(oldStartVnode, newEndVnode);

            parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];

        } else if(checkSameVnode(oldEndVnode, newStartVnode)) {
            patchVnode(oldEndVnode, newStartVnode);

            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm);

            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        } else {
            //
            if(!keyMap) {
                keyMap = {};
                for(let i = oldStartIdx; i < oldEndIdx; i++) {
                    const key = oldCh[i].key;
                    if(key !== undefined) {
                        keyMap[key] = i;
                    }
                }
            }

            const idxInOld = keyMap[newStartVnode.key];
            if(idxInOld === undefined) {
                parentElm.insertBefore(createElement(newStartVnode), oldStartVnode.elm);

            } else {
                const elmToMove = oldCh[idxInOld];
                patchVnode(elmToMove, newStartVnode);
                oldCh[idxInOld] = undefined;
                parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm);

            }
            newStartVnode = newCh[++newStartIdx];
            // newStartIdx++;
        }
    }


    if(newStartIdx <= newEndIdx) {
        console.log('new还有剩余节点！');
        // const before = newCh[newEndIdx + 1] === null ? null : newCh[newEndIdx + 1].elm;

        for(let i = newStartIdx; i <= newEndIdx; i++) {
            parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx].elm);
        }
    } else if(oldStartIdx <= oldEndIdx) {
        console.log('old还有剩余节点！');
        for(let i = oldStartIdx; i <= oldEndIdx; i++) {
            if(oldCh[i]) {
                parentElm.removeChild(oldCh[i].elm);
            }
        }
    }
}

























