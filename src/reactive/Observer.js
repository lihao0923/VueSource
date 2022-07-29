/*
*
*/
import { def } from './utils';
import defineReactive from './defineReactive';
import observe from './observe';
import { arrayMethods } from './array';

export default class Observer {
    constructor(value) {
        this.dep = new Dep();

        def(value, '__ob__', this, false);

        if(Array.isArray(value)) {
            Object.setPrototypeOf(value, arrayMethods);
            this.observeArray(value);
        } else {
            this.walk(value);
        }
    }

    walk(value) {
        for (let k in value) {
            defineReactive(value, k);
        }
    }

    // 数组的特殊遍历
    observeArray(arr) {
        for(let i = 0, l = arr.length; i < l; i++) {
            observe(arr[i]);
        }
    }
}
