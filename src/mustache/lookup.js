/*
* 该函数用于在dataObj对象中，寻找用连续点符号的keyName属性，比如money.rmb
*/

export default function lookup(dataObj, keyName) {
    if(keyName.indexOf('.') !== -1 && keyName !== '.') {
        let keys = keyName.split('.');
        let temp = dataObj;

        for(let i = 0; i < keys.length; i++) {
            temp = temp[keys[i]];
        }

        return temp;
    }

    return dataObj[keyName];
};



