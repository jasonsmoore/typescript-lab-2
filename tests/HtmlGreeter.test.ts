import HtmlGreeter from '../src/HtmlGreeter';
describe("greet", () => {
  test("greeting reads <h1>Hello, Thomas!</h1>", () => {
    const greeter = new HtmlGreeter('Hello')
    const greeting: string = greeter.greet('Thomas');
    expect(greeting).toBe("<h1>Hello, Thomas!</h1>")
  });
  test("greeting reads <h1>Hello, Michael!</h1>", () => {
    const greeter = new HtmlGreeter('Hello')
    const greeting: string = greeter.greet('Michael');
    expect(greeting).toBe("<h1>Hello, Michael!</h1>")
  });
  test("greeting reads <p>Hello, Thomas!</p>", () => {
    const greeter = new HtmlGreeter('Hello', 'p');
    const greeting: string = greeter.greet('Thomas');
    expect(greeting).toBe("<p>Hello, Thomas!</p>")
  });
  test("greeting reads <src>Hello, Michael!</src>", () => {
    const greeter = new HtmlGreeter('Hello', 'src')
    const greeting: string = greeter.greet('Michael');
    expect(greeting).toBe("<src>Hello, Michael!</src>")
  });
});