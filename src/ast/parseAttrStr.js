/**
 * 把attrStr变为数组返回
 */

export default function(attrStr) {
    if(attrStr === undefined) {
        return []
    }

    let isQuotation = false;
    let point = 0;
    let result = [];

    for(let i = 0; i < attrStr.length; i++) {
        let char = attrStr[i];
        if(char === '"') {
            isQuotation = !isQuotation;
        } else if (char === ' ' && !isQuotation) {
            if(!/^\s*$/.test(attrStr.substring(point, i))) {
                result.push(attrStr.substring(point, i).trim());
                point = i;
            }
        }
    }

    result.push(attrStr.substring(point).trim());
    result = result.map(item => {
        let o = item.match(/^(.+)="(.+)"$/);
        return { name: o[1], value: o[2]}
    });

    console.log(JSON.stringify(result));
    console.log(result);

    return result;
}




