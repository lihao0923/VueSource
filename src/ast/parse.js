import parseAttrStr from './parseAttrStr';

//
export default function(templateStr) {
    let index = 0;
    let rest = '';
    let startRegExp = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/;
    let endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
    let stack1 = [];
    let stack2 = [{ children: [] }];
    let wordRegExp = /^([^\<]+)\<\/[a-z]+[1-6]?\>/;

    while(index < templateStr.length - 1) {
        rest = templateStr.substring(index);

        if(startRegExp.test(rest)) {
            let tag = rest.match(startRegExp)[1];
            let attrStr = rest.match(startRegExp)[2];
            // console.log('检测到开始标记：', tag);
            stack1.push(tag);
            stack2.push({ tag: tag, children: [], attrs: parseAttrStr(attrStr) });

            let attrLength = attrStr != null ? attrStr.length : 0;
            index += tag.length + 2 + attrLength;
        } else if(endRegExp.test(rest)) {
            let tag = rest.match(endRegExp)[1];
            let pop_tag = stack1.pop();
            if(tag === pop_tag) {
                let pop_arr = stack2.pop();
                if(stack2.length > 0) {
                    stack2[stack2.length - 1].children.push(pop_arr);
                }
            } else {
                throw new Error(pop_tag + '标签没有封闭！');
            }

            index += tag.length + 3;
        } else if(wordRegExp.test(rest)) {
            let word = rest.match(wordRegExp)[1];
            if(!/^\s+$/.test(word)) {
                stack2[stack2.length - 1].children.push({ text: word, type: 3 });
            }
            index += word.length;
        } else {
            index++;
        }
    }
    // console.log(JSON.stringify(stack2));
    return stack2[0].children[0];
}



