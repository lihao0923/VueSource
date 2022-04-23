// 把attrsString变为数组返回

export default function (attrsString) {
    if (attrsString === undefined) {
        return [];
    }

    // 当前是否在引号内
    let isQuote = false;
    // 断点
    let point = 0;
    // 结果数组
    let result = [];

    // 遍历attrsString,而不是用split暴力拆分
    for (let i = 0; i < attrsString.length; i++) {
        let char = attrsString[i];
        if (char === '"') {
            isQuote = !isQuote;
        } else if (char === ' ' && !isQuote) {
            // 遇见了空格，并且不在引号中
            // console.log(i);
            if (!/^\s*$/.test(attrsString.substring(point, i))) {
                result.push(attrsString.substring(point, i).trim());
                point = i;
            }
        }
    }

    // 循环结束之后，最后还剩一个属性k=v
    result.push(attrsString.substring(point).trim());

    // 以下代码将["k=v"]变为[{name: k, value: v}]的形式
    result = result.map(item => {
        const o = item.match(/^(.+)="(.+)"$/);
        return {
            name: o[1],
            value: o[2]
        }
    });

    // console.log(attrsString);
    return result;
}


