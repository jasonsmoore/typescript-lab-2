class Greeter {
    // greeting: string;
    constructor(public greeting: string,) {}
    greet(name: string) {
        return `${this.greeting}, ${name}!`;
    };
};
export default Greeter;