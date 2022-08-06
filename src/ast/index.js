import parse from './parse';


let templateStr = `<div>
        <h3 class="aa bb cc" id="mybox" data-aria="0923">你好</h3>
        <ul>
            <li>A</li>
            <li>B</li>
            <li>C</li>
        </ul>
    </div>`;

const ast = parse(templateStr);
console.log(ast);












