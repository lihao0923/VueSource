
/*
* 折叠tokens，将#和/之间的tokens整合起来，作为他的下表为3的项
*/
export default function nestTokens(tokens) {
    let nestedTokes = [];
    let sections = [];
    let collector = nestedTokes;

    for(let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        switch (token[0]) {
            case '#':
                collector.push(token);
                sections.push(token);
                collector = token[2] = [];
                break;
            case '/':
                sections.pop();
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokes;
                break;
            default:
                collector.push(token);

        }
    }

    return nestedTokes;
}

