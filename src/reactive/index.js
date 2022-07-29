import defineReactive from './defineReactive';
import observe from './observe';

let obj = {
    a: {
        b: {
            c: 100
        }
    },
    o: {
        p: {
            q: {
                r: 200
            }
        }
    },
    z:[111, 222, 333, 444, 555, 666]
};

observe(obj);
// obj.z.splice(2,1, 888, 999);
// console.log(obj.z);

obj.a++;


