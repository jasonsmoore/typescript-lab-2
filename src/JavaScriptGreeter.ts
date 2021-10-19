import Greeter from "./Greeter";

class JavaScriptGreeter extends Greeter {
    greet(name: string) {
        return `console.log('${this.greeting}, ${name}!')`;
    };
};
export default JavaScriptGreeter;