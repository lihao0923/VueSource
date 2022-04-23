import Compile from './Compile';

export default class Vue {
    constructor(options) {
        // 把options对象存为$options
        this.$options = options || {};

        // 数据
        this._data = options.data || undefined;

        // 数据要变为响应式的
        // 模板编译
        new Compile(options.el, this);
    }
}
