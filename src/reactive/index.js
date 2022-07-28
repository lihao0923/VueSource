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
    }
};

observe(obj);


