export default class Compile {
    constructor(el, vue) {
        this.$vue = vue;
        this.$el = document.querySelector(el);

        if(this.$el) {
            let $fragment = this.node2Fragment(this.$el);

            this.compile($fragment);
        }
    }

    node2Fragment(el) {
        let fragment = document.createDocumentFragment();
        let child;
        while(child = el.firstChild) {
            fragment.appendChild(child);
        }
        return fragment;
    }

    compile(el) {
        let childNodes = el.childNodes;
        let self = this;

        childNodes.forEach(node => {
            if(node.nodeType === 1) {
                self.compileElement(node);
            } else if (node.nodeType === 3) {
                // let text = node.textContent;
                // self.compileText(node);
            }
        })

    }

    compileElement(node) {
        console.log(node);

        let nodeAttrs = node.attributes;
        console.log(nodeAttrs);
    }

    compileText() {

    }
}







