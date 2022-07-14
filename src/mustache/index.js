import Scanner from './Scanner';

window.vueTemplateEngine = {
    render(templateStr, data) {
        let scanner = new Scanner(templateStr);
        let words = '';

        while(!scanner.eos()) {
            words = scanner.scanUtil('{{');
            console.log(words);
            scanner.scan('{{');

            words = scanner.scanUtil('}}');
            console.log(words);
            scanner.scan('}}');
        }
    }
}
