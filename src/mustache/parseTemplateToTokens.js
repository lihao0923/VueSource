import Scanner from './Scanner';
import nestTokens from './nestTokens';

/*
* 将模版字符串变为tokens数组
*
*/
export default function parseTemplateToTokens(templateStr) {
    let tokens = [];

    // 创建扫描器
    let scanner = new Scanner(templateStr);
    let words = '';

    // 让扫描器开始工作
    while(!scanner.eos()) {
        // 收集开始标记出现之前的文字
        words = scanner.scanUtil('{{');

        if(words !== '') {
            tokens.push(['text', words]);
        }

        scanner.scan('{{');

        words = scanner.scanUtil('}}');
        if(words !== '') {
            if(words[0] === '#') {
                tokens.push(['#', words.substring(1)]);
            } else if (words[0] === '/') {
                tokens.push(['/', words.substring(1)]);
            } else {
                tokens.push(['name', words]);
            }
        }

        scanner.scan('}}');
    }

    return nestTokens(tokens);
}
