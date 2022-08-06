
// 算法储备
// 1.试寻找字符串中，连续重复次数最多的字符
// 'aaabbbbbbbbbccddddddddddddeeeeffffffffff'

let str = 'aaabbbbbbbbbbbbbbbbbbbbbbbbbccddddddddddddeeeeffffffffff';
let i = 0;
let j = 1;
let maxRepeat = 0;
let maxRepeatChar = '';

while(i < str.length - 1) {
    if(str[i] !== str[j]) {
        // console.log('报！' + i + '和' + j + '之间的文字连续相同！'); 
        console.log('报！' +  '字母：' + str[i] + ' 重复了' + (j - i ) + '次！'); 
        
        if(j - i > maxRepeat) {
            maxRepeat = j - i;
            maxRepeatChar = str[i];
        }

        console.log('maxRepeat:', maxRepeat);
        console.log('maxRepeatChar:', maxRepeatChar);


        i = j;
    }
    j++;
}










// 2.试输出斐波那契数列的前10项，即1、1、2、3、5、8、13、21、34、55。
let cache = {};
function fib(n) {
    // if(n === 0 || n === 1) {
    //     return 1;
    // }
    // return fib( n - 1) + fib(n - 2);
    // console.count('计数：');

    if(cache.hasOwnProperty(n)) {
        return cache[n];
    }

    let v = n === 0 || n === 1 ? 1 : fib(n - 1) + fib(n - 2);
    cache[n] = v;

    return v;
}

for(let i = 0; i < 50; i++) {
    // console.log(fib(i));
}

// let arr = [1, 1, ]
// while(arr.length < 10) {
//     arr.push(arr[arr.length - 1] + arr[arr.length - 2])
// }
// console.log(arr);












// 3.试将高维数组[1, 2, [3, [4, 5], 6], 7, [8], 9]变为如下所示的对象。
// {
//     children: [
//         { value: 1 },
//         { value: 2 },
//         { children: [
//             { value: 3 },
//             { children: [
//                 { value: 4 },
//                 { value: 5 }
//             ]},
//             { value : 6 },
//         ]},
//         { value: 7 },
//         { children: [
//             { value: 8 }
//         ]},
//         { value: 9 }
//     ]
// }

let arr = [1, 2, [3, [4, 5], 6], 7, [8], 9];

// 写法1
// function arrChange(arr) {
//     function arrTransform(arr) {
//         if(arr.length <= 0) return [];

//         let children = []
//         for(let i = 0; i < arr.length; i++) {
//             if(typeof arr[i] === 'number') {
//                 children.push({ value: arr[i]})
//             } else if (Array.isArray(arr[i])) {
//                 children.push({ children: arrTransform(arr[i])});
//             }
//         }
//         return children;
//     }

//     let children = arrTransform(arr);
//     let resultObj = {}
//     if(children.length > 0) {
//         resultObj = {
//             children: children
//         }
//     }
//     return resultObj;
// }

// console.log(JSON.stringify(arrChange(arr)));

// 写法2
// function convert(item) {
//     if(typeof item === 'number') {
//         return { value: item }
//     } else if(Array.isArray(item)) {
//         return {
//             children: item.map(_item => convert(_item))
//         }
//     }
// }

// let result = convert(arr);
// console.log(JSON.stringify(result));








// 4.试编写"智能重复"smartRepeat函数，实现：
// 将3[abc]变为abcabcabc
// 将3[2[a]2[b]]变为aabbaabbaabb
// 将2[1[a]3[b]2[3[c]4[d]]]变为abbbcccddddcccddddabbbcccddddcccdddd

// 不用考虑输入字符串是非法的情况，比如：
// 2[a3[b]]是错误的，应该补一个1，即2[1[a]3[b]]
// [abc]是错误的，应该补一个1，即1[abc]
let templateStr = '3[2[7abc]4[b]]';

function smartRepeat(templateStr) {
    let index = 0;
    let stack1 = [];
    let stack2 = [];
    let rest = templateStr;

    while(index < templateStr.length - 1) {
        rest = templateStr.substring(index);
        if(/^\d+\[/.test(rest)) {
            let times = Number(rest.match(/^(\d+)\[/)[1]);
            index += times.toString().length + 1;
            stack1.push(times);
            stack2.push('');
        } else if(/^\w+\]/.test(rest)) {
            let word = rest.match(/^(\w+)\]/)[1];
            stack2[stack2.length - 1] = word;
            index += word.length;
        } else if(rest[0] === ']') {
            let times = stack1.pop();
            let word = stack2.pop();
            stack2[stack2.length - 1] += word.repeat(times);

            index++;
        }
        // console.log(index, stack1, stack2);
    }

    return stack2[0].repeat(stack1[0]);
}

let result = smartRepeat(templateStr);
console.log('result:', result);















