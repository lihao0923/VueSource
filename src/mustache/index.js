import parseTemplateToTokens from './parseTemplateToTokens';
import renderTemplate from './renderTemplate';
import lookup from './lookup';

window.vueTemplateEngine = {
    render(templateStr, data) {
        // 调用parseTemplateToTokens函数，让模版字符串能够变为tokens数组
        let tokens = parseTemplateToTokens(templateStr);
        let domStr = renderTemplate(tokens, data)

        return domStr;
    }
}
