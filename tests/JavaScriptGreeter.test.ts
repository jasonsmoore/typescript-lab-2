import JavaScriptGreeter from '../src/JavaScriptGreeter';

describe("greet", () => {
  test("greeting reads console.log(Hello, Thomas!)", () => {
    const greeter = new JavaScriptGreeter('Hello')
    const greeting: string = greeter.greet('Thomas');
    expect(greeting).toBe("console.log('Hello, Thomas!')")
  });
  test("greeting reads console.log(Hello, Michael!)", () => {
    const greeter = new JavaScriptGreeter('Hello')
    const greeting: string = greeter.greet('Michael');
    expect(greeting).toBe("console.log('Hello, Michael!')")
  });
});