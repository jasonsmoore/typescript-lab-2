import Greeter from "./Greeter";

class HtmlGreeter extends Greeter {
    tagName: string;
    constructor(public greeting: string, tagName: string = 'h1') {
        super(greeting);
        this.tagName = tagName;
    };
    greet(name: string) {
        return `<${this.tagName}>${super.greet(name)}</${this.tagName}>`
    }
};
export default HtmlGreeter;