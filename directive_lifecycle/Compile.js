export default class Compile {
    constructor(el, vue) {
        // 实例
        this.$vue = vue;

        // 挂载点
        this.$el = document.querySelector(el);

        // 如果用户传入了挂载点
        if (this.$el) {
            // 调用函数，让节点变为fragment,类似于mustache中的tokens，实际上用的是AST，这里就是轻量级的fragment
            let $fragment = this.node2Fragment(this.$el);
            // 编译模版
            this.compile($fragment);
        }

    }

    node2Fragment(el) {
        let fragment = document.createDocumentFragment();
        let child;

        // 让dom中的所有节点都进入fragment
        while (child = el.firstChild) {
            fragment.appendChild(child);
        }
        return fragment;
    }

    compile(el) {
        // 得到子元素
        let childNodes = el.childNodes;
        let self = this;
        childNodes.forEach(node => {
            if(node.nodeType === 1) {
                self.compileElement(node);
            } else if (node.nodeType === 3) {
                let text = node.textContent;
                console.log(text)
            }
        })
    }

    compileElement(node) {
        // 这里的方便之处在于不是将HTML结构看作字符串，而是真正的属性列表
        let nodeAttrs = node.attributes;

        // 类数组对象变为数组
        Array.prototype.slice.call(nodeAttrs).forEach(attr => {
            let attrName = attr.name;
            let value = attr.value;
            // 指令是v-开头
            let dir = attrName.substring(2);

            // 看看是不是指令
            if (attrName.indexOf('v-') === 0) {
                // v-开头的就是指令
                if (dir === 'model') {
                    console.log('发现了model指令！', value);
                } else if (dir === 'if') {
                    console.log('发现了if指令！', value);
                }
            }
        });
    }

    compileText() {

    }
}



