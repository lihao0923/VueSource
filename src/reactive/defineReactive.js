/*
*
*/
import observe from './observe';
import Dep from './Dep';

export default function defineReactive(data, key,val) {
    const dep = new Dep();

    if(arguments.length === 2) {
        val = data[key];
    }

    let childOb = observe(val);

    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,

        // getter
        get() {

            if(Dep.target) {
                dep.depend();
                if(childOb) {
                    childOb.dep.depend();
                }
            }
            return val;
        },
        // setter
        set(newValue) {
            if(val === newValue) {
                return;
            }
            val = newValue;
            let childOb = observe(newValue);

            dep.notify();
        }
    })
}

