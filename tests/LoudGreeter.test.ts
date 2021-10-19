import LoudGreeter from '../src/LoudGreeter';

describe("greet", () => {
  test("greeting reads Hello, Thomas!!", () => {
    const greeter = new LoudGreeter('Hello');
    const greeting: string = greeter.greet('Thomas');
    expect(greeting).toBe("Hello, Thomas!!");
  });
  test("greeting reads Hello, Michael!!", () => {
    const greeter = new LoudGreeter('Hello');
    const greeting: string = greeter.greet('Michael');
    expect(greeting).toBe('Hello, Michael!!');
  });
  test("greeting reads Hello, Thomas!!!", () => {
    const greeter = new LoudGreeter('Hello');
    greeter.addVolume();
    const greeting: string = greeter.greet('Thomas'); 
    expect(greeting).toBe("Hello, Thomas!!!");
  });
  test("greeting reads Hello, Michael!!!", () => {
    const greeter = new LoudGreeter('Hello');
    greeter.addVolume();
    const greeting: string = greeter.greet('Michael');
    expect(greeting).toBe('Hello, Michael!!!');
  });
});