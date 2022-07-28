/*
*
*/
import observe from './observe';

export default function defineReactive(data, key,val) {
    console.log('defineReactive!!', data, key);
    if(arguments.length === 2) {
        val = data[key];
    }

    let childOb = observe(val);

    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,

        // getter
        get() {
            return val;
        },
        // setter
        set(newValue) {
            if(val === newValue) {
                return;
            }
            val = newValue;
            let childOb = observe(newValue);
        }
    })
}

