import parseAttrsString from  './parseAttrsString';

// parse函数，主函数
export default function(templateString) {
    // 指针
    let index = 0;
    // 剩余部分
    let rest = '';
    // 开始正则表达式
    let startRegExp = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/;
    // 结束正则表达式
    let endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
    // 抓取结束标记前的文字
    let wordRegExp = /^([^\<]+)\<\/[a-z]+[1-6]?\>/;

    // 准备两个栈
    let stack1 = [];
    let stack2 = [{ children: []}];

    while(index < templateString.length - 1) {
        // 剩余部分
        rest = templateString.substring(index);

        // 识别遍历到的这个字符，是不是一个开始标签
        if (startRegExp.test(rest)) {
            let tag = rest.match(startRegExp)[1];
            let attrsString = rest.match(startRegExp)[2];

            // 将开始标记推入栈1中
            stack1.push(tag);
            // 将空数组[]推入栈2中
            stack2.push({ tag: tag, children: [], attrs: parseAttrsString(attrsString) });

            // 指针移动标签的长度加2再加attrString的长度，因为<>占两位
            const attrsStringLength = attrsString !== undefined ? attrsString.length : 0;
            index += tag.length + 2 + attrsStringLength;
        } else if (endRegExp.test(rest)) {
            // 结束部分

            // 识别遍历到的这个字符，是不是一个结束标签
            let tag = rest.match(endRegExp)[1];

            // 此时，tag一定是和栈1顶部的是相同的
            if (tag === stack1[stack1.length - 1]) {
                let pop_tag = stack1.pop();
                let pop_arr = stack2.pop();

                if(stack2.length > 0) {
                    // 检查stack2是否有children属性，如果没有就创建一个空数组
                    stack2[stack2.length - 1].children.push(pop_arr);
                }
            } else {
                throw new Error(stack1[stack1.length - 1] + '标签没有封闭！');
            }
            // 指针移动标签的长度加3，因为</>占两位
            index += tag.length + 3;
        } else if (wordRegExp.test(rest)) {
            // 识别遍历到的这个字符，是不是文字
            let word = rest.match(wordRegExp)[1];

            // 看word是不是全为空
            if (!/^\s+$/.test(word)) {
                stack2[stack2.length - 1].children.push({ text: word, type: 3 });
            }

            // 指针移动word的长度
            index += word.length;
        } else {
            index++;
        }
    }

    // console.log(JSON.stringify(stack2));

    // 此时stack2就是我们之前默认放置的一项了，此时要返回这一项的children即可

    return stack2[0].children[0];
}
