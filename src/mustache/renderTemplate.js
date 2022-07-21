import lookup from './lookup';
import parseArray from './parseArray';

/*
* 把tokens数组变为dom字符串
*/
export default function renderTemplate(tokens, data) {
    let resultStr = '';

    for(let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        if(token[0] === 'text') {
            resultStr += token[1];
        } else if(token[0] === 'name') {
            resultStr += lookup(data, token[1]);
        } else if (token[0] === '#') {
            resultStr += parseArray(token, data)
        }
    }

    return resultStr;
}
