import Greeter from "./Greeter";
class LoudGreeter extends Greeter {
    private extra: string = '!';
    addVolume(): void {
        this.extra += '!';
    };
    greet(name: string) {
        return super.greet(name) + this.extra;
    };
};
export default LoudGreeter;