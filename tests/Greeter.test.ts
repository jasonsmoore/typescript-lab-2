import Greeter from '../src/Greeter';

describe("greet", () => {
  test("greeting reads Hello, Thomas!", () => {
    const greeter = new Greeter('Hello')
    const greeting: string = greeter.greet('Thomas');
    expect(greeting).toBe('Hello, Thomas!')
  });
  test("greeting reads Hello, Michael!", () => {
    const greeter = new Greeter('Hello')
    const greeting: string = greeter.greet('Michael');
    expect(greeting).toBe('Hello, Michael!')
  });
});